"use client"
import Table from '@/components/admin/table'
import Modals from '@/components/admin/modals'
import Link from "next/link"
import moment from "moment"
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import 'moment/locale/tr'

function ProjectsTable({ projects }) {
    const modals = useModals()
    
    return (
        <>
            {modals.length > 0 && <Modals />}
            <Table
                head={[
                    { name: 'SIRA' },
                    { name: 'İSİM' },
                    { name: 'GITHUB' },
                    { name: 'DEMO' },
                    { name: 'TARİH' },
                    { name: 'İŞLEMLER', width: 150 }
                ]}
                body={projects?.map((project, i) => [
                    i + 1,
                    project.name,
                    project.github,
                    project.live,
                    moment(project.createdAt).format('LL'),
                    <div key={i} className="flex justify-center items-center gap-2.5">
                        <Link href={`/dashboard/project/${project._id}`} className="bg-green-500 btn-process">DÜZENLE</Link>
                        <button
                            onClick={() =>
                                createModal({ name: 'accept-modal', title: `${project.name} Projeyi Sil`, data: { name: 'project', id: project._id } })}
                            className="bg-red-500 btn-process"
                        >
                            SİL
                        </button>
                    </div>
                ])}
                search={true}
            />
        </>
    )
}

export default ProjectsTable