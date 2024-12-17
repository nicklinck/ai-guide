/**
 * import { supabaseClient } from "@/lib/supabaseClient";
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

 */

import { supabaseClient } from "@/lib/supabaseClient";
import { createMessage } from "@/queries/messages";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (message: string) => {
      return createMessage(supabaseClient, message);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });
};
