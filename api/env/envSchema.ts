type EnvSchema = {
  RAZORPAY_KEY: string;
  RAZORPAY_KEY_SECRET: string;
  PHONEPE_SDK_KEY: string;
  PHONEPE_SDK_SECRET: string;
  PHONEPE_SDK_VERSION: string;
};

export const env: EnvSchema = {
  RAZORPAY_KEY: process.env.RAZORPAY_KEY!,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET!,
  PHONEPE_SDK_KEY: "",
  PHONEPE_SDK_SECRET: "",
  PHONEPE_SDK_VERSION: "",
};
