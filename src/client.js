import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// dotenv.config();

const URL = "https://ocdmdqagrkdhcaglyvam.supabase.co";

const apiKey = import.meta.env.VITE_SUPABASE_DB_API; //importing the api key from '.env'

export const supabase = createClient(URL, apiKey);
