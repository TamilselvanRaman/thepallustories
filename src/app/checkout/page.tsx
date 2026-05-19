"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  MessageCircle, 
  Minus, 
  Plus, 
  X, 
  ArrowLeft, 
  ShoppingBag, 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  Info,
  Truck,
  CreditCard
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry"
];

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  phone: string;
  email: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

interface FormFieldProps {
  label: string;
  field: keyof FormData;
  type?: string;
  placeholder?: string;
  required?: boolean;
  form: FormData;
  errors: FormErrors;
  focusedField: keyof FormData | null;
  onChange: (field: keyof FormData, value: string) => void;
  onBlur: (field: keyof FormData) => void;
  onFocus: (field: keyof FormData) => void;
}

const FormField = ({ 
  label, 
  field, 
  type = "text", 
  placeholder, 
  required = true,
  form,
  errors,
  focusedField,
  onChange,
  onBlur,
  onFocus
}: FormFieldProps) => {
  const error = errors[field];
  const hasValue = form[field] !== undefined && form[field].length > 0;
  const isFocused = focusedField === field;
  
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="relative">
        <input
          id={`input-${field}`}
          type={type}
          value={form[field]}
          onChange={(e) => onChange(field, e.target.value)}
          onBlur={() => onBlur(field)}
          onFocus={() => onFocus(field)}
          placeholder={isFocused ? placeholder : ""}
          className={`w-full px-4 pt-6 pb-2 bg-surface-container-lowest border rounded-xl text-sm transition-all duration-300 outline-none font-body text-on-surface ${
            error
              ? "border-red-500 ring-2 ring-red-500/10 focus:border-red-500"
              : "border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
          }`}
        />
        <label
          htmlFor={`input-${field}`}
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            hasValue || isFocused || type === "date"
              ? "top-1 text-[10px] font-bold text-primary uppercase tracking-wider"
              : "top-4 text-sm text-on-surface-muted/65"
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            className="text-[11px] font-semibold text-red-600 flex items-center gap-1 pl-1"
          >
            <AlertCircle size={12} className="inline flex-shrink-0" />
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FormSelectProps {
  label: string;
  field: keyof FormData;
  options: string[];
  required?: boolean;
  form: FormData;
  errors: FormErrors;
  focusedField: keyof FormData | null;
  onChange: (field: keyof FormData, value: string) => void;
  onBlur: (field: keyof FormData) => void;
  onFocus: (field: keyof FormData) => void;
}

const FormSelect = ({ 
  label, 
  field, 
  options, 
  required = true,
  form,
  errors,
  focusedField,
  onChange,
  onBlur,
  onFocus
}: FormSelectProps) => {
  const error = errors[field];
  const hasValue = form[field].length > 0;
  const isFocused = focusedField === field;
  
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="relative">
        <select
          id={`select-${field}`}
          value={form[field]}
          onChange={(e) => onChange(field, e.target.value)}
          onBlur={() => onBlur(field)}
          onFocus={() => onFocus(field)}
          className={`w-full px-4 pt-6 pb-2 bg-surface-container-lowest border rounded-xl text-sm transition-all duration-300 outline-none appearance-none font-body text-on-surface ${
            error
              ? "border-red-500 ring-2 ring-red-500/10 focus:border-red-500"
              : "border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
          }`}
        >
          <option value="" disabled></option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-on-surface">
              {opt}
            </option>
          ))}
        </select>
        <label
          htmlFor={`select-${field}`}
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            hasValue || isFocused
              ? "top-1 text-[10px] font-bold text-primary uppercase tracking-wider"
              : "top-4 text-sm text-on-surface-muted/65"
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="absolute right-4 top-4.5 pointer-events-none text-on-surface-muted/60">
          <ChevronDown size={16} />
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            className="text-[11px] font-semibold text-red-600 flex items-center gap-1 pl-1"
          >
            <AlertCircle size={12} className="inline flex-shrink-0" />
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "error" | "success" }>({
    show: false,
    message: "",
    type: "error",
  });

  const shipping = subtotal >= 499 ? 0 : 49;
  const total = subtotal + shipping;

  const showToast = (message: string, type: "error" | "success" = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case "firstName":
        return !value.trim() ? "First name is required" : "";
      case "lastName":
        return !value.trim() ? "Last name is required" : "";
      case "address":
        return !value.trim() 
          ? "Street address is required" 
          : value.trim().length < 8 
          ? "Please enter a detailed street address (min 8 chars)" 
          : "";
      case "city":
        return !value.trim() ? "City is required" : "";
      case "state":
        return !value ? "Please select a state" : "";
      case "postal":
        return !value.trim() 
          ? "PIN code is required" 
          : !/^\d{6}$/.test(value.trim()) 
          ? "Please enter a valid 6-digit PIN code" 
          : "";
      case "phone": {
        const cleanPhone = value.replace(/[\s-+]/g, "");
        return !value.trim() 
          ? "Mobile number is required" 
          : !/^[6-9]\d{9}$/.test(cleanPhone.slice(-10)) 
          ? "Please enter a valid 10-digit mobile number" 
          : "";
      }
      case "email":
        return !value.trim() 
          ? "Email is required" 
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) 
          ? "Please enter a valid email address" 
          : "";
      default:
        return "";
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setFocusedField(null);
    const errorMsg = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    let firstInvalidField: keyof FormData | null = null;
    
    (Object.keys(form) as Array<keyof FormData>).forEach((field) => {
      const errorMsg = validateField(field, form[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fill all required details correctly before proceeding.", "error");
      
      if (firstInvalidField) {
        const element = document.getElementById(`input-${firstInvalidField}`) || document.getElementById(`select-${firstInvalidField}`);
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          element?.focus();
        }, 500);
      }
      return;
    }

    setIsSubmitting(true);
    showToast("Preparing order for WhatsApp concierge...", "success");
    
    setTimeout(() => {
      handleWhatsAppOrder();
      setIsSubmitting(false);
    }, 1200);
  };

  const handleWhatsAppOrder = () => {
    const orderItems = items
      .map((item) => `🛍️ *${item.quantity}x* ${item.name} (${item.subtitle}) — *₹${(item.price * item.quantity).toLocaleString("en-IN")}*`)
      .join("\n");

    const message = `*NEW ORDER REQUEST!* 🛍️✨\n` +
      `----------------------------------\n\n` +
      `👤 *Customer Details:*\n` +
      `• *Name:* ${form.firstName} ${form.lastName}\n` +
      `• *Mobile:* ${form.phone}\n` +
      `• *Email:* ${form.email}\n\n` +
      `📍 *Delivery Address:*\n` +
      `  ${form.address},\n` +
      `  ${form.city}, ${form.state} — *${form.postal}*\n` +
      `  India\n\n` +
      `📦 *Order Summary:*\n` +
      `${orderItems}\n\n` +
      `💳 *Pricing Details:*\n` +
      `• Subtotal: ₹${subtotal.toLocaleString("en-IN")}\n` +
      `• Shipping: ${shipping === 0 ? "FREE Shipping 🎉" : `₹${shipping}`}\n` +
      `• *Total Amount: ₹${total.toLocaleString("en-IN")}*\n\n` +
      `----------------------------------\n` +
      `Please confirm my order and share delivery estimates. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const adminNumber = "919876543210"; // REPLACE WITH ACTUAL ADMIN WHATSAPP NUMBER
    window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");
    clearCart();
    router.push("/collection");
  };

  // Render empty cart state if no items
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface pt-[100px] pb-24 flex items-center justify-center">
        <div className="max-w-md w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-outline-variant/30 rounded-card-lg p-10 shadow-glass space-y-6"
          >
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto text-primary">
              <ShoppingBag size={36} />
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface">Your Shopping Bag is Empty</h2>
            <p className="font-body text-sm text-on-surface-muted max-w-sm mx-auto leading-relaxed">
              Before you checkout, select some beautiful hand-crafted jewelry & accessories from our collections.
            </p>
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 shadow-card"
            >
              Browse Collection <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-[88px] pb-20">
      <div className="container-artisan px-6 md:px-16 py-8">
        
        {/* Navigation Breadcrumb & Page Header */}
        <div className="flex flex-col gap-3 mb-8">
          <Link href="/collection" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group w-fit">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Collections
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
            <div>
              <h1 className="font-display text-3xl font-extrabold text-on-surface tracking-tight">Checkout</h1>
              <p className="font-body text-sm text-on-surface-muted mt-1.5">
                Complete your delivery details to place your custom order directly on WhatsApp.
              </p>
            </div>
            
            {/* Quick Trust Badges */}
            <div className="flex items-center gap-5 text-xs text-on-surface-muted font-body">
              <div className="flex items-center gap-1.5">
                <Truck size={14} className="text-primary" />
                <span>Free Delivery above ₹499</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/30" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-primary" />
                <span>Order via WhatsApp Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Single-Page Checkout Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start" noValidate>
          
          {/* LEFT COLUMN: Customer Form details */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Delivery Details Section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-outline-variant/35 rounded-card-lg p-6 md:p-8 shadow-glass space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</div>
                <h2 className="font-display text-xl font-bold text-on-surface">Delivery Address</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField 
                  label="First Name" 
                  field="firstName" 
                  placeholder="Priya" 
                  form={form}
                  errors={errors}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={setFocusedField}
                />
                <FormField 
                  label="Last Name" 
                  field="lastName" 
                  placeholder="Sharma" 
                  form={form}
                  errors={errors}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={setFocusedField}
                />
              </div>

              <FormField 
                label="Street Address" 
                field="address" 
                placeholder="Flat No. 402, Signature Residency, Link Road" 
                form={form}
                errors={errors}
                focusedField={focusedField}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={setFocusedField}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <FormField 
                  label="City" 
                  field="city" 
                  placeholder="Mumbai" 
                  form={form}
                  errors={errors}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={setFocusedField}
                />
                <FormSelect 
                  label="State" 
                  field="state" 
                  options={INDIAN_STATES} 
                  form={form}
                  errors={errors}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={setFocusedField}
                />
                <FormField 
                  label="PIN Code" 
                  field="postal" 
                  placeholder="400001" 
                  form={form}
                  errors={errors}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={setFocusedField}
                />
              </div>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border border-outline-variant/35 rounded-card-lg p-6 md:p-8 shadow-glass space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</div>
                <h2 className="font-display text-xl font-bold text-on-surface">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FormField 
                    label="Mobile Number" 
                    field="phone" 
                    type="tel" 
                    placeholder="9876543210" 
                    form={form}
                    errors={errors}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={setFocusedField}
                  />
                  <span className="text-[10px] text-on-surface-muted/60 font-body block mt-1 pl-1">
                    Please provide an active mobile number. It will be used to contact you for dispatch.
                  </span>
                </div>
                <div>
                  <FormField 
                    label="Email Address" 
                    field="email" 
                    type="email" 
                    placeholder="priya@gmail.com" 
                    form={form}
                    errors={errors}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={setFocusedField}
                  />
                  <span className="text-[10px] text-on-surface-muted/60 font-body block mt-1 pl-1">
                    Your invoice and delivery updates will be sent to this email address.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Order Summary & WhatsApp CTA */}
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-[104px]">
            
            {/* Summary Details */}
            <div className="bg-white border border-outline-variant/35 rounded-card-lg p-6 shadow-glass">
              <h2 className="font-display text-lg font-bold text-on-surface mb-5 pb-3 border-b border-outline-variant/10">
                Selected Products
              </h2>

              {/* Product list */}
              <div className="space-y-5 max-h-[300px] overflow-y-auto pr-1.5 custom-scrollbar mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start py-2 border-b border-outline-variant/5 last:border-0 last:pb-0">
                    <div className="relative w-14 h-14 rounded-card overflow-hidden border border-outline-variant/20 flex-shrink-0 bg-surface">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-bold text-on-surface leading-tight truncate">{item.name}</p>
                      <p className="font-body text-xs text-on-surface-muted/80">{item.subtitle}</p>
                      
                      <div className="flex items-center justify-between mt-2.5">
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2.5 border border-outline-variant/30 rounded-full px-2 py-0.5 bg-surface-bright/70">
                          <button 
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                            className="text-on-surface-muted hover:text-primary transition-colors p-0.5"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="font-display text-xs font-bold text-on-surface w-4 text-center">{item.quantity}</span>
                          <button 
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                            className="text-on-surface-muted hover:text-primary transition-colors p-0.5"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        
                        {/* Price Details */}
                        <div className="flex items-center gap-3">
                          <span className="font-display text-sm font-bold text-primary">
                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                          <button 
                            type="button"
                            onClick={() => removeItem(item.id)} 
                            className="text-on-surface-muted/50 hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <X size={14} />
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="border-t border-outline-variant/10 pt-4 space-y-3.5">
                
                <div className="flex justify-between text-sm font-body">
                  <span className="text-on-surface-muted/85">Cart Subtotal</span>
                  <span className="font-bold text-on-surface">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                
                <div className="flex justify-between text-sm font-body">
                  <span className="text-on-surface-muted/85">Delivery Charges</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      FREE <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200">PROMO</span>
                    </span>
                  ) : (
                    <span className="font-bold text-on-surface">₹{shipping}</span>
                  )}
                </div>
                
                <div className="flex justify-between items-end pt-4 border-t border-outline-variant/10">
                  <div>
                    <span className="font-display font-bold text-on-surface text-base block">Grand Total</span>
                    <span className="text-[10px] text-on-surface-muted/60 leading-none">Inclusive of all local duties</span>
                  </div>
                  <span className="font-display text-2xl font-extrabold text-primary">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

              </div>

              {/* CTA Button: Places Order via WhatsApp */}
              <div className="mt-6 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#25D366] text-white font-display font-extrabold text-sm tracking-widest uppercase rounded-full hover:bg-[#1ebd5a] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-md ${
                    isSubmitting ? "opacity-90 cursor-not-allowed" : "hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                  }`}
                >
                  <MessageCircle size={20} className="animate-pulse" />
                  {isSubmitting ? "Processing..." : "Place Order via WhatsApp"}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-on-surface-muted/70 font-body py-1">
                  <ShieldCheck size={14} className="text-[#25D366]" />
                  <span>Secure Direct Checkout & Concierge Support</span>
                </div>
              </div>

            </div>

            {/* Extra Shop Assistance Banner */}
            <div className="rounded-card-lg p-5 border border-outline-variant/20 bg-surface-container-low/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <MessageCircle size={18} />
              </div>
              <div className="space-y-1">
                <p className="font-display text-xs font-bold text-on-surface">Need Help Finishing Your Order?</p>
                <p className="font-body text-[11px] text-on-surface-muted/80 leading-relaxed">
                  Have questions about styling or materials? Ping our concierge directly using the chat option in the footer or complete the form to talk on WhatsApp.
                </p>
              </div>
            </div>

          </div>

        </form>
      </div>

      {/* Floating Validation & Success Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg border text-sm font-display font-bold ${
              toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-green-50 border-green-200 text-green-800"
            }`}
          >
            {toast.type === "error" ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
