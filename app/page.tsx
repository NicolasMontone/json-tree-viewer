"use client"

import { JsonViewer } from "@/components/json-tree-viewer"
import { ThemeToggleButton } from "@/components/theme-toggle-button"

const sampleData = {
  string: "Hello, world!",
  number: 42,
  boolean: true,
  null: null,
  object: {
    nested: {
      value: "This is nested",
      array: [1, 2, 3],
    },
    empty: {},
  },
  array: ["string", 123, false, { key: "value" }, ["nested", "array"]],
  longText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
      createdAt: new Date(),

}

export default function Home() {
  return (
    <div className="container py-10 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">JSON Tree Viewer</h1>
        <ThemeToggleButton />
      </div>
      <div className="border rounded-lg p-4 bg-card">
        <JsonViewer data={sampleData} rootName="sampleData" />
      </div>
    </div>
  )
}

