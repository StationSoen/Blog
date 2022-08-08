import React from "react"

interface Props {
  isHorizontal?: boolean
  margin: number
}

export const Margin = ({ isHorizontal = false, margin }: Props) => {
  return (
    <div
      style={{
        width: isHorizontal ? margin : 1,
        height: isHorizontal ? 1 : margin,
      }}
    />
  )
}
