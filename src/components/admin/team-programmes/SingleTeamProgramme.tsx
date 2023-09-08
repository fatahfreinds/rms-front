"use client";
import Modal from "@/components/Modal";
import {
  Programme,
  DeleteProgrammeDocument,
  DeleteProgrammeMutation,
  DeleteProgrammeMutationVariables,
  GetOneProgrammeDocument,
  GetOneProgrammeQuery,
  GetOneProgrammeQueryVariables,
  Mode,
  Model,
  Category,
  Skill,
} from "@/gql/graphql";
import { useState } from "react";
import { OperationResult, useMutation, useQuery } from "urql";
import ViewProgramme from "./ViewTeamProgramme";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Programme[];
  setData: React.Dispatch<React.SetStateAction<Programme[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  skill: string;
  category: string;
  isExcelUpload: boolean;
  setIsExcelUpload: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[];
  skills: Skill[];
}

const OneTeamProgramme = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isViewOpen, setIsViewOpen] = useState<boolean>(false);

  const [{ fetching, data }] = useQuery<
    GetOneProgrammeQuery,
    GetOneProgrammeQueryVariables
  >({
    query: GetOneProgrammeDocument,
    variables: {
      id: props.id,
    },
    pause: props.isCreate || props.isEdit,
  });

  const [state, DeleteProgrammeExecute] = useMutation(DeleteProgrammeDocument);

  const HandleDelete = async () => {
    const deletedData: OperationResult<
      DeleteProgrammeMutation,
      DeleteProgrammeMutationVariables
    > = await DeleteProgrammeExecute({
      id: props.id,
    });

    if (deletedData.data?.removeProgramme?.__typename) {
      const deleted = props.data.filter((value, index) => {
        return value.id !== props.id;
      });

      props.setData(deleted);
      props.setIsOpen(false);
    }
    console.log(deletedData);

    setModalOpen(false);
  };

  const Programme = data?.programme;

  return (
    <div>
      <div>
        {fetching ? (
          <p> loading... </p>
        ) : (
          <div>
            <p>name</p>
            <p className="text-blue-400">{Programme?.name}</p>
            <p>id</p>
            <p className="text-blue-400">{Programme?.id}</p>
            <p>programCode</p>
            <p className="text-blue-400">{Programme?.programCode}</p>
            <p>candidateCount</p>
            <p className="text-blue-400">{Programme?.candidateCount}</p>
            <p>category</p>
            <p className="text-blue-400">{Programme?.category?.name}</p>
            <p>conceptNote</p>
            <p className="text-blue-400">{Programme?.conceptNote}</p>
            <p>duration</p>
            <p className="text-blue-400">{Programme?.duration}</p>
            <p>groupCount</p>
            <p className="text-blue-400">{Programme?.groupCount}</p>
            <p>mode</p>
            <p className="text-blue-400">{Programme?.mode}</p>
            <p>model</p>
            <p className="text-blue-400">{Programme?.model}</p>
            <p>skill</p>
            <p className="text-blue-400">{Programme?.skill?.name}</p>
            <p>type</p>
            <p className="text-blue-400">{Programme?.type}</p>
            <button
              className="bg-green-600"
              onClick={() => setIsViewOpen(true)}
            >
              View More
            </button>
          </div>
        )}
      </div>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} key={3}>
        <p>Are you sure Do you want to Delete ?</p>
        <button className="bg-red-600" onClick={HandleDelete}>
          Delete
        </button>
        <button className="bg-blue-500" onClick={() => setModalOpen(false)}>
          Cancel
        </button>
      </Modal>

      <ViewProgramme
        data={props.data}
        setData={props.setData}
        modalOpen={isViewOpen}
        setModalOpen={setIsViewOpen}
        selectedProgramme={Programme as Programme}
      />
    </div>
  );
};

export default OneTeamProgramme;
