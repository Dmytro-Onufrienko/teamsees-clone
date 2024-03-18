export interface IDonation {
  id: number;
  count: number;
  name: string;
  email: string;
  phoneNumber?: number;
  team?: string;
  message?: string;
  createdAt: Date;
}