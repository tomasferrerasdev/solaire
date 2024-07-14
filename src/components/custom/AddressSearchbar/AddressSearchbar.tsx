import { Button, Input } from "@/components";

export const AddressSearchbar = () => {
  return (
    <div className="flex w-full items-center space-x-2 mb-6">
      <Input type="text" placeholder="Enter your address" className="py-6" />
      <Button type="submit" className="py-6">
        Search
      </Button>
    </div>
  );
};
