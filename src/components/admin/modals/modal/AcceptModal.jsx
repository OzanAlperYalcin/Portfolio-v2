import { deleteBookmark } from "@/services/bookmarks"
import { deleteProject } from "@/services/projects"
import { deleteSocial } from "@/services/socials"
import { deleteTech } from "@/services/techs"
import { deletePost } from "@/services/posts"
import { closeModal } from "@/store/modals/actions"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"

function AcceptModal({ data }) {
  const { id, name } = data
  const router = useRouter()

  const handleDelete = async () => {
    const token = getCookie('token')
    const authorization = `Bearer ${token}`
    let res

    switch (name) {
      case 'bookmark':
        res = await deleteBookmark(id, authorization)
        break;
      case 'project':
        res = await deleteProject(id, authorization)
        break;
      case 'social':
        res = await deleteSocial(id, authorization)
        break;
      case 'tech':
        res = await deleteTech(id, authorization)
        break;
      case 'post':
        res = await deletePost(id, authorization)
        break;
      default:
        break;
    }

    if(res.status) {
      router.refresh()
      closeModal()
      toast.success('Silme işlemi başarılı.')
    } else {
      toast.error('Hata meydana geldi.')
    }
  }

  return (
    <section className="grid justify-center gap-5 px-2.5 py-5">
      <p className="text-sm">Silme işlemine devam etmek istediğinize emin misiniz ?</p>
      <div className="flex justify-center gap-2.5">
        <button onClick={() => handleDelete()} className="btn-process bg-green-500">EVET</button>
        <button onClick={() => closeModal()} className="btn-process bg-red-500">HAYIR</button>
      </div>
    </section>
  )
}

export default AcceptModal