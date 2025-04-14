"use client";

import { useState, useEffect, useRef } from "react";
import { createReview } from "./actions";
import { useFormStatus } from "react-dom";

interface Review {
    id: number;
    content: string;
    author: string;
    createdAt: string;
}

interface ReviewSectionProps {
    movieId: string;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "작성 중..." : "댓글 작성"}
        </button>
    );
}

export default function ReviewSection({ movieId }: ReviewSectionProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const formRef = useRef<HTMLFormElement>(null);

    const fetchReviews = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/review/movie/${movieId}`,
                { cache: "no-store" }
            );
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.error("리뷰를 불러오는데 실패했습니다:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [movieId]);

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
            <h3 className="text-xl font-bold mb-4">댓글</h3>
            <div className="bg-gray-900 rounded-lg p-4">
                <form action={createReview}>
                    <input type="hidden" name="movieId" value={movieId} />
                    <div className="mb-4">
                        <input
                            type="text"
                            name="author"
                            placeholder="작성자"
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                        />
                        <textarea
                            name="content"
                            placeholder="댓글을 입력해주세요"
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
                        />
                    </div>
                    <div className="flex justify-end">
                        <SubmitButton />
                    </div>
                </form>
            </div>

            <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">댓글 목록</h4>
                {reviews.length > 0 ? (
                    <div className="space-y-4">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-gray-900 rounded-lg p-4"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-blue-400">
                                        {review.author}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {new Date(
                                            review.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-300">
                                    {review.content}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center py-4">
                        아직 작성된 댓글이 없습니다.
                    </p>
                )}
            </div>
        </div>
    );
}
