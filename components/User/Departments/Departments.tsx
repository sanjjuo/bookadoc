import { departments } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Departments = () => {
  return (
    <div className="appWidth space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-app-mainText">
          🏥 Our Departments
        </h2>
        <p className="text-app-subText max-w-2xl mx-auto">
          Explore our wide range of medical departments, each staffed with
          experienced professionals dedicated to your well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {departments.map((dept, index) => (
          <Card
            key={index}
            className="rounded-2xl px-5 py-10 shadow-md hover:shadow-lg transition bg-white border border-app-border space-y-3 cursor-default"
          >
            <CardTitle className="p-0">
              <CardTitle className="text-5xl">{dept.icon}</CardTitle>
            </CardTitle>
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-app-mainText">
                {dept.name}
              </h3>
              <p className="text-app-subText text-sm">{dept.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Departments;
