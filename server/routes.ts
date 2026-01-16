import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendAdminNotification, sendUserConfirmation } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const data = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(data);
      
      // Send email notifications (don't block response)
      Promise.all([
        sendAdminNotification(data),
        sendUserConfirmation(data),
      ]).catch((err) => {
        console.error("Email notification error:", err);
      });
      
      res.status(201).json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", field: error.errors[0].path.join(".") });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  return httpServer;
}
