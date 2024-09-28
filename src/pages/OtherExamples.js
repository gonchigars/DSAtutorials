import React from "react";
import { Globe, Image, RotateCcw, Database } from "lucide-react";

const ExampleCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-semibold ml-4">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OtherExamples = () => {
  const examples = [
    {
      title: "Web Browser History",
      description:
        "Linked lists can be used to implement the back and forward functionality in web browsers. Each page visited is a node, with links to the previous and next pages.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Image Viewer",
      description:
        "Photo galleries or image viewers often use linked lists to allow users to navigate through images. Each image is a node with references to the previous and next images.",
      icon: <Image className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Undo Functionality",
      description:
        "Many applications implement undo/redo functionality using a linked list of actions. Each action is a node, allowing users to move back and forth through their action history.",
      icon: <RotateCcw className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Memory Management",
      description:
        "Operating systems often use linked lists to keep track of free memory blocks. Each block is a node, making it easy to allocate and deallocate memory dynamically.",
      icon: <Database className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Other Real-World Examples of Linked Lists
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <ExampleCard key={index} {...example} />
        ))}
      </div>
    </div>
  );
};

export default OtherExamples;
