import Modal from "@/app/components/Modal";
import MoviePage from "@/app/movie/[id]/page";

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params;
    return (
        <div>
            <Modal>
                <MoviePage params={Promise.resolve({ id })} />
            </Modal>
        </div>
    );
};

export default Page;
