import CollabarativeRoom from "@/components/CollabarativeRoom";
interface DocumentProps {
  params: { id: string }; // Access the 'id' from dynamic route
}

function Document({ params }: DocumentProps) {
  const { id } = params;
  console.log(id);
  
  return (
    <main className="flex w-full flex-col items-center">
      <CollabarativeRoom room={id}/>
    </main>
  );
}

export default Document;
