import { AppSupabaseClient } from "@/database.types";

export const getAllMessages = async (supabase: AppSupabaseClient) => {
  const { data, error: error } = await supabase.from("messages").select();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};

export const createMessage = async (
  supabase: AppSupabaseClient,
  message: string
) => {
  const { data, error: error } = await supabase.from("messages").insert({
    message,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};
