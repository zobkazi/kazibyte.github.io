import mongoose, { Document, Schema } from "mongoose";

export interface ILoginHistory extends Document {
  email: string;
  timestamp: Date;
}

const loginHistorySchema = new Schema<ILoginHistory>({
  email: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const LoginHistory =
  mongoose.models.LoginHistory ||
  mongoose.model<ILoginHistory>("LoginHistory", loginHistorySchema);

export default LoginHistory;
