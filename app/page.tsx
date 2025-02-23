import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold my-2">Oluoko&apos;s APIs</h1>
      <Card className="w-[90vw] md:w-[70vw] lg:w-[50vw] text-lg text-center">
        <CardContent>
          A simple app that will be a server for API endpoints for various
          purposes. <br />
          Such as: <br />
          <ul className="list-disc list-inside mr-4">
            <li>
              For the backend of mobile dev projects that are still in
              development.
            </li>
            <li>
              For the backend of web dev projects that are still in development.
            </li>

            <li>And many more...</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
