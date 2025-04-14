"use server";

export async function createReview(formData: FormData) {
    try {
        const movieId = formData.get("movieId");
        const content = formData.get("content");
        const author = formData.get("author");

        if (!movieId || !content || !author) {
            throw new Error("모든 필드를 입력해주세요.");
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/review`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    movieId,
                    content,
                    author
                })
            }
        );

        if (!response.ok) {
            throw new Error("리뷰 작성에 실패했습니다.");
        }
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : "리뷰 작성에 실패했습니다."
        );
    }
}
