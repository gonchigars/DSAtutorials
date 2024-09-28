import React from "react";
import { Check, X } from "lucide-react";

const Feature = ({ text, isPositive }) => (
  <li className="flex items-center space-x-3">
    {isPositive ? (
      <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
    ) : (
      <X className="flex-shrink-0 w-5 h-5 text-red-500" />
    )}
    <span>{text}</span>
  </li>
);

const LinkedListIntro = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Introduction to Linked Lists
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        A linked list is a linear data structure where elements are stored in
        nodes. Each node contains data and a reference (or link) to the next
        node in the sequence.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Key Characteristics
        </h2>
        <ul className="space-y-3">
          <Feature
            text="Dynamic size - can grow or shrink as needed"
            isPositive={true}
          />
          <Feature
            text="Efficient insertion and deletion at any point"
            isPositive={true}
          />
          <Feature
            text="No random access - must traverse from the beginning"
            isPositive={false}
          />
          <Feature
            text="Extra memory space required for storing references"
            isPositive={false}
          />
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Common Operations
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Insertion (at the beginning, end, or middle)</li>
          <li>Deletion (from the beginning, end, or middle)</li>
          <li>Traversal</li>
          <li>Searching</li>
        </ul>
      </div>
    </div>
  );
};

export default LinkedListIntro;
