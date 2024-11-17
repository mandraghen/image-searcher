"use client";

import { useState } from "react";
import { Input, Button, Card, Link, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { searchImages } from "@/actions/unsplash-helper";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<Photos | null>();
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    const results = await searchImages(query, 1);
    setPhotos(results);
    setPage(1);
  };

  const handlePagination = async (newPage: number) => {
    const results = await searchImages(query, newPage);
    setPhotos(results);
    setPage(newPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Photo Search</h1>

      <div className="flex items-center mb-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for photos..."
          className="flex-1 mr-2"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {photos?.results && photos?.results?.length > 0 ? photos?.results.map((photo) => (
          <Card key={photo.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <CardHeader>
              <Image
                alt={photo.alt_description || "Unsplash photo"}
                //radius="sm"
                src={photo.urls.small}
                width={400}
              />
              <div className="flex flex-col">
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-blue-500 font-semibold">{photo.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link className="text-blue-500"
                isExternal
                showAnchorIcon
                href={`/image/${photo.id}`}
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        )) : "No photo returned"
        }
      </div>

      {photos?.results ? photos?.results?.length > 0 && (
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => handlePagination(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button onClick={() => handlePagination(page + 1)}>Next</Button>
        </div>
      ) : null
      }
    </div>
  );
}
