import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import requests from "src/utils/repository"
import NurseLayout from "src/views/nurse/NurseLayout"


const VitalsView = (props: any) => {
  // ** State

  const router = useRouter()

  return <NurseLayout patientId={router.query.id} />
}

export default VitalsView


