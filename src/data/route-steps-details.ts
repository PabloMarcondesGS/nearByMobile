import React from "react"
import {
  WarehouseTruckIcon,
  RouteDisplacementIcon,
  LogisticHubIcon,
  HandTruckIcon,
  BuildingOriginIcon,
} from "@/components/route-icons"

export type RouteStepDetail = {
  id: string
  title: string
  description: string
  notesAvailable: number
  icon: React.ComponentType<{ size?: number; color?: string }>
  status: {
    phase: string
    departureDate: string
  }
  info: {
    address: string
    phone: string
  }
  details: {
    label: string
    date: string
  }[]
}

export const routeStepsDetailsMap: Record<string, RouteStepDetail> = {
  "1": {
    id: "1",
    title: "Centro de distribuição SP",
    description: "Seu pacote será triado e direcionado ao entregador responsável.",
    notesAvailable: 3,
    icon: WarehouseTruckIcon,
    status: {
      phase: "Fase de controle de qualidade e segurança",
      departureDate: "Saíra daqui até 12/11/2025",
    },
    info: {
      address: "Alameda Jaú, 123. Centro, São Paulo - SP",
      phone: "+55 (18) 2311-2149",
    },
    details: [
      { label: "montagem de rotas", date: "10/11/25 às 17:02" },
      { label: "classificação", date: "10/11/25 às 08:39" },
      { label: "recebimento", date: "09/11/25 às 20:56" },
    ],
  },
  "2": {
    id: "2",
    title: "Deslocamento",
    description: "O item será levado em caminhão ou avião até o centro logístico da região.",
    notesAvailable: 0,
    icon: RouteDisplacementIcon,
    status: {
      phase: "Transporte rodoviário interestadual em andamento",
      departureDate: "Chegada prevista em 10/11/2025",
    },
    info: {
      address: "Rodovia Presidente Dutra, KM 210, Guarulhos - SP",
      phone: "+55 (11) 3450-8800",
    },
    details: [
      { label: "em trânsito para filial destino", date: "09/11/25 às 14:15" },
      { label: "carregamento do veículo concluído", date: "09/11/25 às 11:30" },
      { label: "manifesto de carga emitido", date: "09/11/25 às 09:40" },
    ],
  },
  "3": {
    id: "3",
    title: "Centro logístico",
    description: "Um hub (centro de triagem) onde o pacote é separado conforme a região.",
    notesAvailable: 1,
    icon: LogisticHubIcon,
    status: {
      phase: "Conferência de lote e pesagem de segurança",
      departureDate: "Liberado em 09/11/2025",
    },
    info: {
      address: "Av. das Nações Unidas, 4500, Santo Amaro, São Paulo - SP",
      phone: "+55 (11) 4002-8922",
    },
    details: [
      { label: "triagem automatizada concluída", date: "08/11/25 às 19:10" },
      { label: "conferência de volume e lacre", date: "08/11/25 às 16:45" },
      { label: "entrada no armazém central", date: "08/11/25 às 13:20" },
    ],
  },
  "4": {
    id: "4",
    title: "Coleta pela transportadora",
    description: "O pacote é retirado no centro de distribuição",
    notesAvailable: 2,
    icon: HandTruckIcon,
    status: {
      phase: "Emissão de guia e protocolo de coleta física",
      departureDate: "Concluído em 08/11/2025",
    },
    info: {
      address: "Rua Vergueiro, 789, Vila Mariana, São Paulo - SP",
      phone: "+55 (11) 2234-9000",
    },
    details: [
      { label: "assinatura digital de retirada", date: "08/11/25 às 10:12" },
      { label: "etiquetagem do pacote com código de barras", date: "07/11/25 às 17:35" },
      { label: "solicitação de coleta aceita", date: "07/11/25 às 15:00" },
    ],
  },
  "5": {
    id: "5",
    title: "Empresa X (Origem)",
    description: "O sistema verifica o estoque, gera a nota fiscal e aciona a transportadora.",
    notesAvailable: 2,
    icon: BuildingOriginIcon,
    status: {
      phase: "Separação de estoque e embalagem concluídas",
      departureDate: "Iniciado em 07/11/2025",
    },
    info: {
      address: "Av. Paulista, 1000, Bela Vista, São Paulo - SP",
      phone: "+55 (11) 3100-5000",
    },
    details: [
      { label: "nota fiscal eletrônica autorizada", date: "07/11/25 às 14:20" },
      { label: "produto embalado e conferido", date: "07/11/25 às 11:05" },
      { label: "pedido recebido no sistema", date: "07/11/25 às 08:30" },
    ],
  },
}
