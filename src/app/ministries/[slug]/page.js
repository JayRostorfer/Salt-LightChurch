import ministries from "@/data/ministries"

import MinistryPageLayout4 from "@/components/ministries/MinistryPageLayout4"

import { notFound } from "next/navigation"

export default async function MinistryPage({
  params,
}) {
  const { slug } = await params

  const ministry = ministries.find(
    (item) => item.slug === slug
  )

  if (!ministry) {
    notFound()
  }

  return (
    <MinistryPageLayout4 ministry={ministry} />
    
  )
}
