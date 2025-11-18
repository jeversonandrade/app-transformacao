'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'

const ONBOARDING_STEPS = [
  {
    title: 'Dados Pessoais',
    description: 'Conte-nos um pouco sobre você'
  },
  {
    title: 'Suas Dores',
    description: 'O que te trouxe até aqui?'
  },
  {
    title: 'Resumo da Experiência',
    description: 'Entenda o que vai acontecer'
  }
]

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Step 1 - Dados Pessoais
  const [age, setAge] = useState('')
  const [occupation, setOccupation] = useState('')
  const [location, setLocation] = useState('')

  // Step 2 - Dores
  const [painPoints, setPainPoints] = useState<string[]>([])
  const [customPain, setCustomPain] = useState('')

  const PAIN_OPTIONS = [
    'Estagnação profissional',
    'Relacionamentos difíceis',
    'Falta de propósito',
    'Problemas financeiros',
    'Baixa autoestima',
    'Procrastinação crônica',
    'Falta de energia',
    'Ansiedade e estresse'
  ]

  const togglePainPoint = (pain: string) => {
    setPainPoints(prev =>
      prev.includes(pain)
        ? prev.filter(p => p !== pain)
        : [...prev, pain]
    )
  }

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      // Salvar onboarding e redirecionar para pagamento
      setLoading(true)
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) throw new Error('Usuário não autenticado')

        const allPainPoints = customPain
          ? [...painPoints, customPain]
          : painPoints

        await supabase.from('onboarding').insert({
          user_id: user.id,
          personal_data: { age, occupation, location },
          pain_points: allPainPoints
        })

        toast.success('Perfil criado com sucesso!')
        router.push('/payment')
      } catch (error: any) {
        toast.error(error.message || 'Erro ao salvar dados')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">THE ONE SHIFT</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {ONBOARDING_STEPS[step].title}
          </h1>
          <p className="text-xl text-blue-200">
            {ONBOARDING_STEPS[step].description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex gap-2">
            {ONBOARDING_STEPS.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  index <= step ? 'bg-amber-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <p className="text-blue-200 text-sm mt-2 text-center">
            Passo {step + 1} de {ONBOARDING_STEPS.length}
          </p>
        </div>

        {/* Content */}
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
          {step === 0 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-white">Idade</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Ex: 35"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation" className="text-white">Profissão</Label>
                <Input
                  id="occupation"
                  type="text"
                  placeholder="Ex: Empresário, Professor..."
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-white">Localização</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Ex: Lisboa, Portugal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                  required
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <p className="text-blue-200">
                Selecione as áreas onde sente mais dificuldade (pode escolher várias):
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {PAIN_OPTIONS.map((pain) => (
                  <div
                    key={pain}
                    onClick={() => togglePainPoint(pain)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      painPoints.includes(pain)
                        ? 'bg-amber-500/20 border-amber-500'
                        : 'bg-white/5 border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={painPoints.includes(pain)}
                        className="border-white/40"
                      />
                      <span className="text-white">{pain}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customPain" className="text-white">
                  Outra dor específica (opcional)
                </Label>
                <Textarea
                  id="customPain"
                  placeholder="Descreva outra dificuldade que não está listada..."
                  value={customPain}
                  onChange={(e) => setCustomPain(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 min-h-[100px]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  A Sua Jornada de Transformação
                </h3>
                <div className="space-y-4 text-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">24 Horas Intensivas</h4>
                      <p>8 blocos poderosos que vão te guiar através de uma transformação profunda.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">30 Dias de Integração</h4>
                      <p>Plano estruturado semana a semana para consolidar a mudança.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">PDF Personalizado</h4>
                      <p>Documento completo com toda a sua jornada para guardar para sempre.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                <h4 className="text-white font-semibold mb-3">O que está incluído:</h4>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Acesso completo aos 8 blocos da jornada de 24h
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Plano de integração de 30 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    PDF personalizado com toda a sua jornada
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Áudios de reprogramação
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Suporte durante toda a jornada
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">9,97€</p>
                <p className="text-blue-200">30 dias de acesso completo</p>
                <p className="text-sm text-blue-300 mt-2">
                  Renovação automática por 4,97€/mês após 30 dias
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          {step > 0 && (
            <Button
              onClick={handleBack}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={loading}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-full shadow-lg shadow-amber-500/50"
          >
            {loading ? 'Processando...' : step === 2 ? 'Ir para Pagamento' : 'Continuar'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
