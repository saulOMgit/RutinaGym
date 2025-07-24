import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Dumbbell, Target, Clock, TrendingUp, Plus, Minus, CheckCircle2, Trophy } from 'lucide-react'
import { ProgressRing } from './components/ProgressRing.jsx'
import { routinesData } from './data/routines.js'
import './App.css'

function App() {
  const [selectedRoutine, setSelectedRoutine] = useState('rutina_actual')
  const [selectedDay, setSelectedDay] = useState('')
  const [weights, setWeights] = useState({})
  const [completedSets, setCompletedSets] = useState({})

  // Inicializar el primer día de la rutina seleccionada
  useEffect(() => {
    const routine = routinesData[selectedRoutine]
    if (routine && routine.routines) {
      const firstDay = Object.keys(routine.routines)[0]
      setSelectedDay(firstDay)
    }
  }, [selectedRoutine])

  // Cargar pesos guardados del localStorage
  useEffect(() => {
    const savedWeights = localStorage.getItem('gymWeights')
    if (savedWeights) {
      setWeights(JSON.parse(savedWeights))
    }
  }, [])

  // Guardar pesos en localStorage
  const saveWeights = (newWeights) => {
    setWeights(newWeights)
    localStorage.setItem('gymWeights', JSON.stringify(newWeights))
  }

  // Función para recomendar peso
  const getRecommendedWeight = (exercise, currentWeight) => {
    if (!currentWeight) return 'Sin datos'
    const weight = parseFloat(currentWeight.toString().replace(/[^\d.]/g, ''))
    if (isNaN(weight)) return 'Sin datos'
    
    // Incremento del 2.5% para la próxima sesión
    const recommended = Math.round((weight * 1.025) * 4) / 4 // Redondear a 0.25kg
    return `${recommended}kg`
  }

  // Actualizar peso de un ejercicio
  const updateWeight = (exercise, weight) => {
    const key = `${selectedRoutine}_${selectedDay}_${exercise}`
    const newWeights = { ...weights, [key]: weight }
    saveWeights(newWeights)
  }

  // Marcar serie como completada
  const toggleSet = (exercise, setIndex) => {
    const key = `${selectedRoutine}_${selectedDay}_${exercise}_${setIndex}`
    setCompletedSets(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const currentRoutine = routinesData[selectedRoutine]
  const currentDayExercises = currentRoutine?.routines[selectedDay] || []

  // Calcular progreso del día actual
  const calculateDayProgress = () => {
    if (currentDayExercises.length === 0) return 0
    
    let totalSets = 0
    let completedSetsCount = 0
    
    currentDayExercises.forEach(exercise => {
      if (exercise.series) {
        totalSets += exercise.series
        for (let i = 0; i < exercise.series; i++) {
          const setKey = `${selectedRoutine}_${selectedDay}_${exercise.ejercicio}_${i}`
          if (completedSets[setKey]) {
            completedSetsCount++
          }
        }
      }
    })
    
    return totalSets > 0 ? (completedSetsCount / totalSets) * 100 : 0
  }

  const dayProgress = calculateDayProgress()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Dumbbell className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Rutinas Gym</h1>
          </div>
          <p className="text-slate-300">Tu entrenador personal digital</p>
        </motion.div>

        {/* Selector de Rutina */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Tabs value={selectedRoutine} onValueChange={setSelectedRoutine} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              {Object.entries(routinesData).map(([key, routine]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="text-xs text-slate-400 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  {routine.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Selector de Día */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Object.keys(currentRoutine?.routines || {}).map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDay(day)}
                className={`whitespace-nowrap ${
                  selectedDay === day 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {day.length > 15 ? day.substring(0, 15) + '...' : day}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Progreso del día */}
        {currentDayExercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ProgressRing progress={dayProgress} size={50} />
                    <div>
                      <h3 className="text-white font-semibold">Progreso del día</h3>
                      <p className="text-slate-400 text-sm">
                        {Math.round(dayProgress)}% completado
                      </p>
                    </div>
                  </div>
                  {dayProgress === 100 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      <Trophy className="h-8 w-8 text-yellow-400" />
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Lista de Ejercicios */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedRoutine}_${selectedDay}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {currentDayExercises.map((exercise, index) => {
              const weightKey = `${selectedRoutine}_${selectedDay}_${exercise.ejercicio}`
              const currentWeight = weights[weightKey] || exercise.peso || ''
              const recommendedWeight = getRecommendedWeight(exercise.ejercicio, currentWeight)

              return (
                <motion.div
                  key={`${exercise.ejercicio}_${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-white text-lg leading-tight">
                            {exercise.ejercicio}
                          </CardTitle>
                          <CardDescription className="text-slate-400 mt-1">
                            {exercise.tecnica}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                          {exercise.series ? `${exercise.series} series` : 'Progresión'}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Información del ejercicio */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Target className="h-4 w-4 text-purple-400" />
                          <span>
                            {exercise.objetivo_reps || exercise.reps || exercise.duración || 'Variable'} reps
                          </span>
                        </div>
                        {exercise.distancia && (
                          <div className="flex items-center gap-2 text-slate-300">
                            <Clock className="h-4 w-4 text-purple-400" />
                            <span>{exercise.distancia}</span>
                          </div>
                        )}
                      </div>

                      {/* Control de peso */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`weight-${index}`} className="text-slate-300 text-sm">
                            Peso actual:
                          </Label>
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id={`weight-${index}`}
                              type="text"
                              placeholder="ej: 25kg"
                              value={currentWeight}
                              onChange={(e) => updateWeight(exercise.ejercicio, e.target.value)}
                              className="bg-slate-700 border-slate-600 text-white text-sm h-8"
                            />
                          </div>
                        </div>
                        
                        {recommendedWeight !== 'Sin datos' && (
                          <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-green-400" />
                            <span className="text-green-400">
                              Recomendado próxima: {recommendedWeight}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Series completadas */}
                      {exercise.series && (
                        <div className="space-y-2">
                          <Label className="text-slate-300 text-sm">Series completadas:</Label>
                          <div className="flex gap-2 flex-wrap">
                            {Array.from({ length: exercise.series }, (_, setIndex) => {
                              const setKey = `${selectedRoutine}_${selectedDay}_${exercise.ejercicio}_${setIndex}`
                              const isCompleted = completedSets[setKey]
                              
                              return (
                                <Button
                                  key={setIndex}
                                  variant={isCompleted ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => toggleSet(exercise.ejercicio, setIndex)}
                                  className={`w-10 h-8 p-0 ${
                                    isCompleted 
                                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                                      : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                                  }`}
                                >
                                  {setIndex + 1}
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-slate-400 text-sm"
        >
          <p>💪 ¡Mantén la constancia y alcanza tus objetivos!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default App

