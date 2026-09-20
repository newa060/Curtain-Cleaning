"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Check,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Lock,
} from "lucide-react";

const AVAILABLE_SERVICES = [
  { id: "Curtain Cleaning", label: "Curtain Cleaning" },
  { id: "Sheer Cleaning", label: "Sheer Cleaning" },
  { id: "Blind Cleaning", label: "Blind Cleaning" },
  { id: "Mould Treatment", label: "Mould Treatment" },
  { id: "Stain Removal", label: "Stain Removal" },
  { id: "Odour Removal", label: "Odour Removal" },
];

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "Morning (8:00 AM - 12:00 PM)",
    instructions: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Curtain Cleaning",
  ]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Hero / Top Banner */}
      <section className="relative bg-primary text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-secondary-container text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            BOOK ONLINE
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-2xl tracking-tight">
            Book Your Curtain Clean
          </h1>
          <p className="font-body text-sm sm:text-base text-on-primary-container max-w-xl mt-3 font-normal leading-relaxed">
            No payment upfront. We'll confirm your booking details and provide a exact price before our visit.
          </p>

          <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-on-primary-container text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">Cleaned at your home</span>
            </div>
            <span className="text-white/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">Zero fabric shrinkage</span>
            </div>
            <span className="text-white/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">All Greater Brisbane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Form Card Container */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/15">
            {isSubmitted ? (
              <div className="p-8 sm:p-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-surface-container text-primary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Booking Confirmed!
                </h2>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || "valued client"}</strong>! We have received your booking request for <strong>{selectedServices.join(", ")}</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-surface-container max-w-md mx-auto text-left text-xs space-y-2 text-primary">
                  <div><strong>Preferred Date:</strong> {formData.date || "As soon as possible"}</div>
                  <div><strong>Time Slot:</strong> {formData.time}</div>
                  <div><strong>Address:</strong> {formData.address || "Brisbane address"}</div>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Our team will call or email you shortly to confirm exact arrival details.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        address: "",
                        date: "",
                        time: "Morning (8:00 AM - 12:00 PM)",
                        instructions: "",
                      });
                    }}
                    className="px-8 py-3 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="divide-y divide-primary/10">
                <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                  {/* SECTION 1: Personal Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold text-sm shrink-0 shadow-sm">
                        1
                      </span>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
                        Personal Details
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          FULL NAME *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                          <input
                            type="email"
                            required
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          MOBILE PHONE *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                          <input
                            type="tel"
                            required
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          PROPERTY ADDRESS *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                          <input
                            type="text"
                            required
                            placeholder="Property Address"
                            value={formData.address}
                            onChange={(e) =>
                              setFormData({ ...formData, address: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Preferred Date */}
                  <div className="space-y-6 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold text-sm shrink-0 shadow-sm">
                        2
                      </span>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
                        Preferred Date
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          DATE *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                          PREFERRED TIME
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
                          <select
                            value={formData.time}
                            onChange={(e) =>
                              setFormData({ ...formData, time: e.target.value })
                            }
                            className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer appearance-none"
                          >
                            <option value="Morning (8:00 AM - 12:00 PM)">
                              Morning (8:00 AM - 12:00 PM)
                            </option>
                            <option value="Afternoon (12:00 PM - 4:00 PM)">
                              Afternoon (12:00 PM - 4:00 PM)
                            </option>
                            <option value="Evening (4:00 PM - 7:00 PM)">
                              Evening (4:00 PM - 7:00 PM)
                            </option>
                            <option value="Flexible All Day">Flexible All Day</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: Select Services */}
                  <div className="space-y-6 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold text-sm shrink-0 shadow-sm">
                        3
                      </span>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
                        Select Services
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {AVAILABLE_SERVICES.map((srv) => {
                        const isSelected = selectedServices.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer select-none transition-all border ${
                              isSelected
                                ? "bg-[#f0f7f5] border-primary text-primary shadow-xs font-bold"
                                : "bg-[#f8fcfb] border-primary/20 text-on-surface-variant hover:border-primary/40 font-medium"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                                isSelected
                                  ? "bg-primary text-white"
                                  : "bg-white border border-primary/30"
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <span className="text-xs sm:text-sm font-headline">
                              {srv.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 4: Special Instructions (Optional) */}
                  <div className="space-y-6 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold text-sm shrink-0 shadow-sm">
                        4
                      </span>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
                        Special Instructions (Optional)
                      </h2>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                        ADDITIONAL DETAILS
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-4 w-4 h-4 text-primary/60 pointer-events-none" />
                        <textarea
                          rows={4}
                          placeholder="Specific stains, access notes, parking instructions, pets, etc."
                          value={formData.instructions}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              instructions: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50 min-h-[120px] resize-y"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Submit Bar */}
                <div className="bg-[#f0f7f5] px-6 sm:px-8 py-6 border-t border-primary/10 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-2xl bg-primary hover:bg-primary-dark active:scale-[0.99] text-white font-headline text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{loading ? "Processing..." : "Confirm Booking"}</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 text-on-surface-variant text-xs pt-1">
                    <Lock className="w-3.5 h-3.5 text-secondary" />
                    <span>No upfront payment required. Free cancellation.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Editorial Split Banner */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl bg-surface-container p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-primary/10 shadow-sm">
          <div className="w-full sm:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
              alt="Sunlit Australian living room with clean curtains"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              WHY LEAVE THEM HANGING
            </span>
            <h4 className="font-headline text-lg sm:text-xl font-bold text-primary">
              Cleaned Right Where They Hang
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Dismantling heavy curtains is awkward and can damage tracks and pleats. Our gentle steam process cleans your curtains on the track so you don't lose privacy or window protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
