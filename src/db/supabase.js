import { supabase } from "../client";

export const getAllusers = async () => {

  const response = await supabase.from("creators").select("*");

  return response;

}