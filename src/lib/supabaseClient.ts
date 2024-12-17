import { Database } from "@/database.types";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const supabaseClient = createPagesBrowserClient<Database>();
