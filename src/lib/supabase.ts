import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
          subscription_status: 'trial' | 'active' | 'expired'
          subscription_end: string
          has_premium: boolean
          journey_start_time: string | null
          current_block: number
          unlock_mode: 'completion' | 'timed'
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
      onboarding: {
        Row: {
          id: string
          user_id: string
          personal_data: any
          pain_points: string[]
          created_at: string
        }
      }
      blocks: {
        Row: {
          id: string
          user_id: string
          block_number: number
          completed: boolean
          data: any
          completed_at: string | null
          created_at: string
        }
      }
      integration_plan: {
        Row: {
          id: string
          user_id: string
          week_number: number
          goals: string[]
          rituals: string[]
          reflection: string
          victories: string[]
          completed: boolean
          created_at: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          amount: number
          type: 'initial' | 'renewal' | 'premium'
          status: 'pending' | 'completed' | 'failed'
          stripe_payment_id: string
          created_at: string
        }
      }
    }
  }
}
