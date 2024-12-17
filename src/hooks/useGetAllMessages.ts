import { supabaseClient } from "@/lib/supabaseClient";
import { getAllMessages } from "@/queries/messages";
import { useQuery } from "@tanstack/react-query";

export const useGetAllMessages = () => {
  return useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      return getAllMessages(supabaseClient);
    },
  });
};
