import { Text, IconBadge } from "@medusajs/ui"
import { Stripe, Mastercard, Visa, Klarna, VerifiedBadge } from "@medusajs/icons"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-x-2 items-center">
        <IconBadge>
          <Stripe />
        </IconBadge>
        <IconBadge>
          <Mastercard />
        </IconBadge>
        <IconBadge>
          <Visa />
        </IconBadge>
        <IconBadge>
          <Klarna />
        </IconBadge>
        <IconBadge>
          <VerifiedBadge />
        </IconBadge>
      </div>
      <Text className="txt-compact-small-plus mt-2">Secure & Encrypted</Text>
    </div>
  )
}

export default MedusaCTA
