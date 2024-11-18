import { searchImageDetails } from "@/actions/unsplash-helper";
import type { Metadata } from 'next'
import { Card, Button, Link, Spacer, CardBody, Image } from "@nextui-org/react";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const photo = await searchImageDetails((await params).id);

    return {
        title: photo?.alt_description || "Unsplash Photo",
        description: photo?.description || "View this amazing Unsplash photo!",
    };
}

export default async function PhotoDetailsPage({ params }: Props) {
    const photoId = (await params).id
    const photo = await searchImageDetails(photoId);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <Card isHoverable className="shadow-lg p-4">
                <h1 className="text-3xl font-semibold mb-6">
                    {photo?.alt_description || "Photo Details"}
                </h1>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image Section */}
                    <Card
                        isHoverable
                        className="flex-shrink-0 lg:w-1/2 w-full overflow-hidden rounded-lg shadow-md"
                    >
                        <CardBody>
                            <Image
                                src={photo?.urls.full}
                                alt={photo?.alt_description || "Unsplash photo"}
                                className="w-full h-auto rounded-lg"
                            />
                        </CardBody>
                    </Card>

                    {/* Details Section */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-lg text-gray-600">
                                <strong>Description:</strong>{" "}
                                {photo?.description || "No description available"}
                            </p>
                            <Spacer y={0.5} />
                            <p className="text-lg text-gray-600">
                                <strong>Photographer:</strong>{" "}
                                <Link
                                    href={photo?.user.links.html}
                                    isExternal
                                    className="text-blue-500 underline"
                                >
                                    {photo?.user.name}
                                </Link>
                            </p>
                            <Spacer y={0.5} />
                            <p className="text-lg text-gray-600">
                                <strong>Likes:</strong> {photo?.likes}
                            </p>
                            <Spacer y={0.5} />
                            <p className="text-lg text-gray-600">
                                <strong>Dimensions:</strong> {photo?.width}x{photo?.height}
                            </p>
                        </div>

                        {/* Download Button */}
                        <div className="mt-6">
                            <Button
                                as="a"
                                href={photo?.links.download}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                size="lg"
                            >
                                Download Image
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}