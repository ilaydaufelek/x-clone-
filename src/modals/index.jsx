import modals from "../routes/modals"
import { removeModal } from "../store/modal/actions"
import { useModal } from "../store/modal/hooks"

export default function Modal(){
    const modal =useModal()
     const currentModal=modals.find(m => m.name == modal.name)
    return(
        <div className=" fixed inset-0 bg-black/80 flex justify-center items-center z-30 ">
          {currentModal && <currentModal.element close={removeModal} />}
        </div>
    )
}