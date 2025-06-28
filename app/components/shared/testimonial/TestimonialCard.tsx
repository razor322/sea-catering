"use client";

import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { Testimonial } from "@prisma/client";

interface TestimonialFormProps {
  onSubmitSuccess?: (testimonial: Testimonial) => void;
}

export function TestimonialForm({ onSubmitSuccess }: TestimonialFormProps) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    plan: "",
    rating: 5,
    experience: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post("/api/testimonial", form);
      toast.success("Testimonial submitted!");
      onSubmitSuccess?.(res.data);
      setForm({ name: "", location: "", plan: "", rating: 5, experience: "" });
    } catch {
      toast.error("Failed to submit testimonial");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="border p-6 rounded-lg shadow bg-white max-w-xl mx-auto">
      <h2 className="text-lg font-semibold">Write a Testimonial</h2>
      <p className="text-sm text-gray-500 mb-4">
        Share your journey and inspire others to start their healthy eating
        transformation
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Enter your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="City, Province"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
      </div>

      <select
        className="border rounded px-3 py-2 mt-4 w-full"
        value={form.plan}
        onChange={(e) => setForm({ ...form, plan: e.target.value })}
      >
        <option value="">Select your meal plan</option>
        <option value="Protein Plan">Protein Plan</option>
        <option value="Diet Plan">Diet Plan</option>
        <option value="Royal Plan">Royal Plan</option>
      </select>

      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Rating</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 cursor-pointer ${
                form.rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setForm({ ...form, rating: star })}
              fill={form.rating >= star ? "#facc15" : "none"}
            />
          ))}
        </div>
      </div>

      <Textarea
        className="mt-4"
        placeholder="Tell us about your experience..."
        value={form.experience}
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />

      <Button
        onClick={handleSubmit}
        className="mt-6 w-full"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Testimonial"}
      </Button>
    </div>
  );
}
