import axios from "axios";
import { tmdbConfig } from "../config/TMDBConfig.js";

export const apiClient = axios.create({
  baseURL: tmdbConfig.baseURL,
  timeout: 5000, // Tiempo de espera para la solicitud
  headers: {
    Authorization: `Bearer ${tmdbConfig.apiKey}`, // Si usas un token de acceso
    "Content-Type": "application/json",
  },
  params: {
    language: "es-ES", // Idioma por defecto
  },
});

