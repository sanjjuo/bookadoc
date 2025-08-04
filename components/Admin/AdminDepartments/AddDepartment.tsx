"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/User/common/CustomInput/CustomInput";
import CustomTextarea from "@/components/User/common/CustomTextarea/CustomTextarea";
import { useHandleAdminAddDepartment } from "./Functions/handleFunctions";

const AddDepartment = () => {
  const { form, handleAddDepartment } = useHandleAdminAddDepartment();
  return (
    <Card className="space-y-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-app-mainText">
          Add Department
        </CardTitle>
        <CardDescription>
          Create a new department by providing its name and related details.
          This will be available across the platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="!mt-0">
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(handleAddDepartment)}
            className="space-y-4"
          >
            <CustomInput
              form={form}
              name="departmentName"
              type="text"
              label="Department Name"
              placeholder="Enter department name"
            />
            <CustomInput
              form={form}
              name="departmentImage"
              type="text"
              label="Department Image"
              placeholder="ex: https://placeholder.jpg"
            />
            <CustomTextarea
              form={form}
              name="departmentDescription"
              placeholder="Enter department description"
              label="Department Description"
            />
            <Button type="submit" className="app-btn">
              Add Department
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddDepartment;
