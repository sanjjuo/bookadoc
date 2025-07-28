"use client";
import * as React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function DatePicker({
  form,
  label,
  placeholder,
  name,
}: {
  form: UseFormReturn<any>;
  label: string;
  placeholder: string;
  name: string;
}) {
  const { control } = form;
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => {
        const date = value ? new Date(value) : undefined;
        const formattedValue = formatDate(date);

        return (
          <div className="flex flex-col gap-1">
            <Label htmlFor={name} className="px-1 input-label">
              {label}
            </Label>
            <div className="relative flex flex-col gap-2">
              <Input
                id={name}
                value={formattedValue}
                placeholder={placeholder}
                className="bg-background pr-10 input-field"
                readOnly
              />
              {fieldState.error && (
                <p className="text-xs font-medium text-red-500 mt-1">
                  {fieldState.error?.message}
                </p>
              )}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-4.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(selectedDate) => {
                      onChange(selectedDate);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );
      }}
    />
  );
}
