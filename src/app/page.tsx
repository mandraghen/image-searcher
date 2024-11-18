"use client";

import { useEffect, useState } from "react";
import { Input, Button, Card, Link, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { searchImages } from "@/actions/unsplash-helper";
import { generate } from "random-words";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<Photos | null>();
  const [page, setPage] = useState(1);

  const handleSearch = async (newPage: number) => {
    let finalQuery = query;
    if (!query) {
      const randomString = generate();
      if (typeof randomString === 'string') {
        setQuery(randomString);
        finalQuery = randomString;
      } else if (typeof randomString === "object") {
        setQuery(randomString[0]);
        finalQuery = randomString[0];
      }
    }
    const results = await searchImages(finalQuery, newPage);
    setPhotos(results);
    setPage(newPage);
  };

  useEffect(() => {
    handleSearch(1);
  }, []);// eslint-disable-line

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Photo Search</h1>

      <div className="flex items-center mb-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(1);
            }
          }}
          placeholder="Search for photos..."
          className="flex-1 mr-2 text-black"
        />
        <Button onClick={() => handleSearch(1)}>Search</Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {photos?.results && photos?.results?.length > 0 ? photos?.results.map((photo) => (
          <Card key={photo.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <CardHeader>
              <Image
                alt={photo.alt_description || "Unsplash photo"}
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

      {photos?.results && photos.results.length > 0 ? (
        <div className="mt-4 space-y-2">
          {/* Display page and results information */}
          <div className="text-center text-gray-600">
            <p>
              Page <span className="font-semibold">{page}</span> of{" "}
              <span className="font-semibold">{photos?.total_pages}</span> | Total Results:{" "}
              <span className="font-semibold">{photos?.total}</span>
            </p>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center">
            <Button
              onClick={() => handleSearch(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => handleSearch(page + 1)}
              disabled={page === photos?.total_pages}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
