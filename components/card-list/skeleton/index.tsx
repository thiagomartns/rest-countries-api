import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => {
  return (
    <Card className="rounded-xl shadow-xl">
      <CardHeader className="p-0 rounded-xl flex items-center">
        <Skeleton className="rounded-t-xl object-cover xl:w-[600px] xl:h-[190px] lg:w-[500px] md:h-[220px]" />
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="xl:h-[100px]  md:h-[90px] h-[90px]">
          <Skeleton className={`h-4 w-[250px] font-extrabold pt-5`} />
        </div>
        <ul className="flex flex-col gap-2 lg:pt-0">
          <li className="text-lg">
            <b>Population:</b> <Skeleton />
          </li>
          <li className="text-lg">
            <b>Region:</b> <Skeleton />
          </li>
          <li className="text-lg">
            <b>Capital: </b>
            <Skeleton />
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
