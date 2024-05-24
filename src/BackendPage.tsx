import { Input } from "@nextui-org/react";

export default function BackendPage() {
  return (
    <>
      <Input
        type="url"
        label="Website"
        placeholder="nextui.org"
        labelPlacement="outside"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">https://</span>
          </div>
        }
      />
    </>
  );
}
