'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Clock, Target, Award, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Bem-vindo de volta
              </h1>
              <p className="text-xl text-blue-200">
                Continue sua jornada de transformação
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/dashboard">
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-amber-500/20 rounded-full">
                      <Target className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Dashboard</h3>
                  </div>
                  <p className="text-blue-200 mb-4">
                    Acesse sua jornada e acompanhe seu progresso
                  </p>
                  <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-2 transition-transform" />
                </Card>
              </Link>

              <Link href="/journey">
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-amber-500/20 rounded-full">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Jornada 24h</h3>
                  </div>
                  <p className="text-blue-200 mb-4">
                    Continue sua transformação de 24 horas
                  </p>
                  <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-2 transition-transform" />
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">TRANSFORMAÇÃO EM 24 HORAS</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            THE ONE SHIFT
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
            A jornada que muda tudo em 24 horas
          </p>
          
          <p className="text-xl text-blue-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Um programa intensivo de transformação pessoal que te guia através de 8 blocos poderosos, 
            seguido por um plano de integração de 30 dias para consolidar a mudança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-amber-500/50 hover:scale-105 transition-all">
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              Saber Mais
            </Button>
          </div>

          {/* Pricing Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
            <p className="text-blue-200 text-sm mb-1">Apenas</p>
            <p className="text-4xl font-bold text-white">9,97€</p>
            <p className="text-blue-300 text-sm mt-1">30 dias de acesso completo</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24 Horas Intensivas</h3>
              <p className="text-blue-200 leading-relaxed">
                8 blocos poderosos que te guiam através de uma transformação profunda em apenas um dia.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">30 Dias de Integração</h3>
              <p className="text-blue-200 leading-relaxed">
                Plano estruturado semana a semana para consolidar e expandir a transformação.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">PDF Personalizado</h3>
              <p className="text-blue-200 leading-relaxed">
                Receba um documento completo com toda a sua jornada e insights para sempre.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* 8 Blocks Preview */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Os 8 Blocos da Transformação
          </h2>
          <p className="text-xl text-blue-200 text-center mb-16">
            Cada bloco é uma etapa essencial da sua jornada
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: 'A Verdade Brutal', time: '0-3h' },
              { num: 2, title: 'Corte com o Passado', time: '3-6h' },
              { num: 3, title: 'Identidade One Shift', time: '6-9h' },
              { num: 4, title: 'Corpo e Energia', time: '9-12h' },
              { num: 5, title: 'Dinheiro e Propósito', time: '12-15h' },
              { num: 6, title: 'Relações e Família', time: '15-18h' },
              { num: 7, title: 'Coragem', time: '18-21h' },
              { num: 8, title: 'Ritual de Fecho', time: '21-24h' }
            ].map((block) => (
              <Card key={block.num} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <div className="text-amber-400 text-4xl font-bold mb-2">{block.num}</div>
                <h4 className="text-white font-bold mb-2">{block.title}</h4>
                <p className="text-blue-300 text-sm">{block.time}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Pronto para a Transformação?
          </h2>
          <p className="text-xl text-blue-200 mb-12">
            Comece agora sua jornada de 24 horas que vai mudar tudo
          </p>
          <Link href="/auth">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl shadow-amber-500/50 hover:scale-105 transition-all">
              Começar Agora por 9,97€
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
