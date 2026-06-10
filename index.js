// Lógica de Control del Simulador del Examen de Admisión
const masterQuestions = [{"categoria": "Intervalos", "pregunta": "Si A = (-2, 5] y B = [3, 8), ¿cuál es el resultado de la intersección A ∩ B?", "opciones": ["[3, 5]", "(3, 5]", "[-2, 8)", "(3, 5)"], "correcta": "[3, 5]", "explicacion": "La intersección incluye los números que pertenecen a ambos intervalos de forma simultánea."}, {"categoria": "Intervalos", "pregunta": "Sean los intervalos M = [-5, 2) y N = (0, 6]. Determina la unión M ∪ N.", "opciones": ["[-5, 6]", "(-5, 6]", "[-5, 6)", "(0, 2)"], "correcta": "[-5, 6]", "explicacion": "La unión agrupa todos los elementos desde el extremo inferior hasta el superior cubriendo todo el rango."}, {"categoria": "Intervalos", "pregunta": "Dado el conjunto universal U = ℝ. Si un intervalo es C = [1, +∞), ¿cuál es su complemento C'?", "opciones": ["(-∞, 1)", "(-∞, 1]", "(1, +∞)", "[-1, 1]"], "correcta": "(-∞, 1)", "explicacion": "El complemento contiene todos los elementos que no están en C. Como C incluye al 1, su complemento es estrictamente menor."}, {"categoria": "Intervalos", "pregunta": "Si representamos los intervalos P = [-3, 4] y Q = (1, 5), calcula la diferencia P - Q.", "opciones": ["[-3, 1]", "[-3, 1)", "[-3, 4]", "(4, 5)"], "correcta": "[-3, 1]", "explicacion": "A los elementos de P se les quita todo lo que comparta con Q. El número 1 se mantiene en P porque no está incluido en Q."}, {"categoria": "Intervalos", "pregunta": "Dados los intervalos X = (-∞, 3] e Y = [-1, +∞). ¿Qué conjunto representa X ∩ Y?", "opciones": ["[-1, 3]", "(-1, 3)", "(-∞, +∞)", "[-1, 3)"], "correcta": "[-1, 3]", "explicacion": "Los valores en común van desde -1 inclusive hasta 3 inclusive, formando un intervalo cerrado compacto."}, {"categoria": "Intervalos", "pregunta": "Si el conjunto A = (-4, 0] y el conjunto B = (-2, 2). Calcule la diferencia B - A.", "opciones": ["(0, 2)", "[0, 2)", "(-2, 0]", "(-4, -2]"], "correcta": "(0, 2)", "explicacion": "Al conjunto B se le extrae el tramo que comparte con A (hasta 0 inclusive), dejando el intervalo abierto."}, {"categoria": "Ecuaciones con Valor Absoluto", "pregunta": "Resuelve la ecuación analítica: |2x - 3| = 7.", "opciones": ["x = 5 y x = -2", "x = 5 y x = 2", "x = -5 y x = 2", "x = 4 y x = -1"], "correcta": "x = 5 y x = -2", "explicacion": "Se plantean los dos casos: 2x - 3 = 7 (x = 5) y 2x - 3 = -7 (x = -2)."}, {"categoria": "Ecuaciones con Valor Absoluto", "pregunta": "Encuentra el conjunto solución para la expresión matemática: |x + 5| = 0.", "opciones": ["{-5}", "{5, -5}", "{0}", "No tiene solución"], "correcta": "{-5}", "explicacion": "El valor absoluto de una expresión es cero si y solo si la expresión interna es cero."}, {"categoria": "Ecuaciones con Valor Absoluto", "pregunta": "¿Cuál es la solución real para la ecuación lineal: |3x - 1| = -4?", "opciones": ["No tiene solución en ℝ", "x = -1", "x = 5/3", "x = 1 y x = -1"], "correcta": "No tiene solución en ℝ", "explicacion": "Por definición, un valor absoluto nunca puede dar como resultado un número negativo."}, {"categoria": "Ecuaciones con Valor Absoluto", "pregunta": "Resuelve la ecuación algebraica con doble valor absoluto: |x - 2| = |2x + 1|.", "opciones": ["x = 1/3 y x = -3", "x = -1/3 y x = 3", "x = 1/3 y x = 3", "x = -1/3 y x = -3"], "correcta": "x = 1/3 y x = -3", "explicacion": "Caso directo: x - 2 = 2x + 1 (x = -3); Caso con signo opuesto: x - 2 = -(2x + 1) (x = 1/3)."}, {"categoria": "Ecuaciones con Valor Absoluto", "pregunta": "Determine la solución de la ecuación: |4x + 8| = 12.", "opciones": ["x = 1 y x = -5", "x = 1 y x = 5", "x = -1 y x = -5", "x = 0 y x = 3"], "correcta": "x = 1 y x = -5", "explicacion": "Caso 1: 4x + 8 = 12 (x = 1). Caso 2: 4x + 8 = -12 (x = -5)."}, {"categoria": "Inecuaciones con Valor Absoluto", "pregunta": "Resuelve la inecuación lineal con valor absoluto: |x - 3| ≤ 5.", "opciones": ["[-2, 8]", "(-2, 8)", "(-∞, -2] ∪ [8, +∞)", "[-8, 2]"], "correcta": "[-2, 8]", "explicacion": "Propiedad: -5 ≤ x - 3 ≤ 5. Sumando 3 a cada miembro se obtiene -2 ≤ x ≤ 8."}, {"categoria": "Inecuaciones con Valor Absoluto", "pregunta": "Determina el conjunto de valores que satisfacen la condición: |2x + 1| > 7.", "opciones": ["(-∞, -4) ∪ (3, +∞)", "[-4, 3]", "(-4, 3)", "(-∞, -3) ∪ (4, +∞)"], "correcta": "(-∞, -4) ∪ (3, +∞)", "explicacion": "Se divide en dos ramas: 2x + 1 > 7 (x > 3) o 2x + 1 < -7 (x < -4)."}, {"categoria": "Inecuaciones con Valor Absoluto", "pregunta": "El rango térmico ideal de un compuesto químico se expresa como |T - 100| < 15. ¿Cuál es el intervalo de operación?", "opciones": ["(85, 115)", "[85, 115]", "(-∞, 85) ∪ (115, +∞)", "(90, 110)"], "correcta": "(85, 115)", "explicacion": "Significa que -15 < T - 100 < 15. Al sumar 100 obtenemos 85 < T < 115."}, {"categoria": "Inecuaciones con Valor Absoluto", "pregunta": "Resuelve la inecuación y selecciona el intervalo correspondiente: |5 - x| < 2.", "opciones": ["(3, 7)", "[-3, 7]", "(3, 5)", "(-∞, 3) ∪ (7, +∞)"], "correcta": "(3, 7)", "explicacion": "Equivale a -2 < 5 - x < 2. Restando 5 da -7 < -x < -3. Multiplicando por -1 se invierten los signos: 3 < x < 7."}, {"categoria": "Inecuaciones con Valor Absoluto", "pregunta": "Resuelve la expresión: |2x - 4| ≤ 6.", "opciones": ["[-1, 5]", "(-1, 5)", "[-5, 1]", "(-∞, -1] ∪ [5, +∞)"], "correcta": "[-1, 5]", "explicacion": "Se plantea -6 ≤ 2x - 4 ≤ 6. Sumando 4 queda -2 ≤ 2x ≤ 10, por ende -1 ≤ x ≤ 5."}, {"categoria": "Funciones", "pregunta": "Dada la función cuadrática f(x) = x² - 4x + 3, calcule las coordenadas de su vértice V.", "opciones": ["V(2, -1)", "V(-2, 1)", "V(2, 3)", "V(4, 3)"], "correcta": "V(2, -1)", "explicacion": "La coordenada x del vértice es -b/(2a) = 4/2 = 2. Evaluando f(2) = 2² - 4(2) + 3 = -1."}, {"categoria": "Funciones", "pregunta": "Determine los puntos de corte con el eje X de la función f(x) = x² - 9.", "opciones": ["(3, 0) y (-3, 0)", "(0, 3) y (0, -3)", "(9, 0) y (-9, 0)", "No corta al eje X"], "correcta": "(3, 0) y (-3, 0)", "explicacion": "Haciendo f(x) = 0, se obtiene x² = 9, cuyas raíces son x = 3 y x = -3."}, {"categoria": "Funciones", "pregunta": "Determine el dominio real de la función con raíz irracional f(x) = √(x - 5).", "opciones": ["[5, +∞)", "(5, +∞)", "(-∞, 5]", "ℝ - {5}"], "correcta": "[5, +∞)", "explicacion": "El radicando de una raíz cuadrada debe ser mayor o igual a cero en el campo real: x - 5 ≥ 0."}, {"categoria": "Funciones", "pregunta": "¿Cuál es el dominio de la función racional explícita g(x) = (2x + 1) / (x² - 4)?", "opciones": ["ℝ - {2, -2}", "ℝ - {4}", "[2, +∞)", "(-2, 2)"], "correcta": "ℝ - {2, -2}", "explicacion": "El denominador x² - 4 no puede ser cero, lo cual excluye a x = 2 y x = -2."}, {"categoria": "Funciones", "pregunta": "Halle el punto de corte con el eje Y de la función f(x) = 3x² - 5x + 7.", "opciones": ["(0, 7)", "(7, 0)", "(0, -5)", "(3, 0)"], "correcta": "(0, 7)", "explicacion": "Se evalúa la función en x = 0: f(0) = 3(0)² - 5(0) + 7 = 7."}, {"categoria": "Funciones", "pregunta": "Determine el rango de la función f(x) = x² + 2.", "opciones": ["[2, +∞)", "ℝ", "(2, +∞)", "[0, +∞)"], "correcta": "[2, +∞)", "explicacion": "Dado que x² es siempre mayor o igual a cero, el menor valor de la función es 2."}, {"categoria": "Identidades Trigonométricas", "pregunta": "Al simplificar la expresión fundamental (sin²θ + cos²θ) / sec²θ obtenemos:", "opciones": ["cos²θ", "sin²θ", "tan²θ", "1"], "correcta": "cos²θ", "explicacion": "Por identidad pitagórica, el numerador es 1. Y 1 / sec²θ = cos²θ."}, {"categoria": "Identidades Trigonométricas", "pregunta": "La expresión trigonométrica simplificada de (tan x · cos x) equivale a:", "opciones": ["sin x", "sec x", "csc x", "cot x"], "correcta": "sin x", "explicacion": "Sustituyendo tan x = sin x / cos x, los cosenos se simplifican dejando únicamente sin x."}, {"categoria": "Identidades Trigonométricas", "pregunta": "Demuestre la igualdad implícita reduciendo la expresión: csc x - sin x.", "opciones": ["cot x · cos x", "tan x · sin x", "sec x · cos x", "1"], "correcta": "cot x · cos x", "explicacion": "1/sin x - sin x = (1 - sin²x)/sin x = cos²x/sin x = cot x · cos x."}, {"categoria": "Identidades Trigonométricas", "pregunta": "¿A qué es equivalente la expresión trigonométrica tan²x + 1?", "opciones": ["sec²x", "csc²x", "cos²x", "cot²x"], "correcta": "sec²x", "explicacion": "Es una identidad pitagórica directa derivada de sin²x + cos²x = 1."}, {"categoria": "Identidades Trigonométricas", "pregunta": "Simplifique la función: sin(2x) / (2 sin x). ¿Cuál es su forma reducida?", "opciones": ["cos x", "sin x", "2 cos x", "tan x"], "correcta": "cos x", "explicacion": "sin(2x) = 2 sin x cos x. Al dividirlo por 2 sin x se cancelan términos, quedando cos x."}, {"categoria": "Identidades Trigonométricas", "pregunta": "Simplifique la estructura: (1 - cos²x) · csc²x.", "opciones": ["1", "sin²x", "cos²x", "tan²x"], "correcta": "1", "explicacion": "1 - cos²x = sin²x, y csc²x = 1/sin²x. Multiplicados dan 1."}, {"categoria": "Vectores", "pregunta": "Dados los vectores u = (3, -2) y v = (1, 4), calcule el vector suma u + v.", "opciones": ["(4, 2)", "(2, -6)", "(4, -6)", "(3, -8)"], "correcta": "(4, 2)", "explicacion": "Se suman las componentes homólogas correspondientes: (3+1, -2+4) = (4, 2)."}, {"categoria": "Vectores", "pregunta": "Calcule el producto escalar de los vectores u = (2, 5) y v = (-3, 4).", "opciones": ["14", "-6", "20", "26"], "correcta": "14", "explicacion": "Multiplicación componente a componente sumada: (2 * -3) + (5 * 4) = -6 + 20 = 14."}, {"categoria": "Vectores", "pregunta": "Si tenemos un vector de fuerza F1 = (5, 7) y se le resta F2 = (2, 3), ¿cuál es el vector resultante F1 - F2?", "opciones": ["(3, 4)", "(7, 10)", "(-3, -4)", "(3, 10)"], "correcta": "(3, 4)", "explicacion": "Se restan las componentes del segundo vector al primero: (5-2, 7-3) = (3, 4)."}, {"categoria": "Vectores", "pregunta": "Determine la magnitud (módulo) del vector en el plano a = (6, 8).", "opciones": ["10", "14", "48", "100"], "correcta": "10", "explicacion": "Se calcula mediante la raíz de la suma de los cuadrados de sus componentes: √(6² + 8²) = √100 = 10."}, {"categoria": "Vectores", "pregunta": "Si el vector v = (-1, 3), determine el vector escalado 3v.", "opciones": ["(–3, 9)", "(3, 9)", "(–3, 3)", "(2, 6)"], "correcta": "(–3, 9)", "explicacion": "Cada componente se multiplica de manera lineal por el escalar 3: (3*-1, 3*3)."}, {"categoria": "Vectores", "pregunta": "¿Qué propiedad cumplen dos vectores no nulos cuyo producto escalar es igual a cero?", "opciones": ["Son perpendiculares (ortogonales)", "Son paralelos", "Tienen la misma longitud", "Son vectores opuestos"], "correcta": "Son perpendiculares (ortogonales)", "explicacion": "Si el producto escalar es cero, el coseno del ángulo formado es 0, implicando un ángulo de 90 grados."}, {"categoria": "Límites de Funciones", "pregunta": "Calcule el límite cuando x tiende a 3 de la función racional: lim (x² - 9) / (x - 3).", "opciones": ["6", "3", "0", "No existe"], "correcta": "6", "explicacion": "Factorizando como diferencia de cuadrados (x-3)(x+3)/(x-3) = x+3. Evaluando en 3 resulta 6."}, {"categoria": "Límites de Funciones", "pregunta": "Halle el límite al infinito de la siguiente expresión exponencial: lim (5x² + 2) / (3x² - x) cuando x → +∞.", "opciones": ["5/3", "0", "+∞", "2"], "correcta": "5/3", "explicacion": "Al tender al infinito se evalúa el cociente de los coeficientes de mayor grado: 5/3."}, {"categoria": "Límites de Funciones", "pregunta": "Calcule el valor numérico del límite directo: lim (2x + 4) cuando x → 5.", "opciones": ["14", "10", "12", "16"], "correcta": "14", "explicacion": "Por sustitución directa al tratarse de una función polinomial continua: 2(5) + 4 = 14."}, {"categoria": "Límites de Funciones", "pregunta": "Determine el comportamiento del límite: lim (1 / x) cuando x → 0 por la derecha (+).", "opciones": ["+∞", "-∞", "0", "1"], "correcta": "+∞", "explicacion": "Al aproximarse a cero por valores positivos extremadamente pequeños, la función crece sin límite."}, {"categoria": "Límites de Funciones", "pregunta": "Calcule el límite indeterminado: lim (x² - x) / x cuando x → 0.", "opciones": ["-1", "0", "1", "No existe"], "correcta": "-1", "explicacion": "Factorizando x en el numerador x(x - 1)/x = x - 1. Al evaluar en x=0, da -1."}, {"categoria": "Límites de Funciones", "pregunta": "Encuentre el resultado del límite de la función: lim (x² - 4) / (x - 2) cuando x → 2.", "opciones": ["4", "2", "0", "Indefinido"], "correcta": "4", "explicacion": "Simplificando la indeterminación: (x-2)(x+2)/(x-2) = x+2. Evaluando en 2 obtenemos 4."}];

let gameQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentQuestionAnswered = false;
let timerInterval = null;
let totalTimeSeconds = 0;
const SECONDS_PER_QUESTION = 90;
let renderedOptions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");
    currentQuestionIndex = 0;
    score = 0;
    
    gameQuestions = shuffleArray(JSON.parse(JSON.stringify(masterQuestions)));
    totalTimeSeconds = gameQuestions.length * SECONDS_PER_QUESTION;

    updateHUD();
    startTimer();
    loadQuestion();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        totalTimeSeconds--;
        updateTimerDisplay();
        if (totalTimeSeconds <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(totalTimeSeconds / 60);
    const sec = totalTimeSeconds % 60;
    document.getElementById("time-left").innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    currentQuestionAnswered = false;
    document.getElementById("feedback-panel").classList.remove("active");
    document.getElementById("lifeline-display").classList.remove("active");
    
    const q = gameQuestions[currentQuestionIndex];
    document.getElementById("current-q-num").innerText = currentQuestionIndex + 1;
    document.getElementById("category-badge").innerText = q.categoria;
    document.getElementById("question-box").innerText = q.pregunta;
    
    renderedOptions = shuffleArray([...q.opciones]);
    
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`opt-${i}`);
        btn.className = "option-btn";
        btn.disabled = false;
        document.getElementById(`text-${i}`).innerText = renderedOptions[i];
    }
}

function selectOption(idx) {
    if (currentQuestionAnswered) return;
    currentQuestionAnswered = true;

    const q = gameQuestions[currentQuestionIndex];
    const selected = renderedOptions[idx];
    const isCorrect = (selected === q.correcta);

    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i}`).disabled = true;
    }

    const selBtn = document.getElementById(`opt-${idx}`);
    const corrIdx = renderedOptions.indexOf(q.correcta);
    const corrBtn = document.getElementById(`opt-${corrIdx}`);

    if (isCorrect) {
        selBtn.classList.add("correct");
        score++;
        updateHUD();
        showFeedback("¡CORRECTO!", "Excelente análisis matemático.", q.explicacion, true);
    } else {
        selBtn.classList.add("incorrect");
        corrBtn.classList.add("correct");
        showFeedback("¡INCORRECTO!", "Revisa las propiedades del tema.", q.explicacion, false);
    }
}

function showFeedback(title, sub, exp, isCorrect) {
    const panel = document.getElementById("feedback-panel");
    const tBox = document.getElementById("feedback-title");
    const eBox = document.getElementById("explanation-box");
    
    tBox.innerText = title + " - " + sub;
    tBox.style.color = isCorrect ? "#10b981" : "#ef4444";
    eBox.innerText = exp;
    panel.classList.add("active");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < gameQuestions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        endGame();
    }
}

function updateHUD() {
    document.getElementById("score-val").innerText = score;
}

function use5050() {
    if (currentQuestionAnswered) return;
    const q = gameQuestions[currentQuestionIndex];
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (renderedOptions[i] !== q.correcta && count < 2) {
            document.getElementById(`opt-${i}`).classList.add("hidden-option");
            count++;
        }
    }
}

function useRemoveOne() {
    if (currentQuestionAnswered) return;
    const q = gameQuestions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
        if (renderedOptions[i] !== q.correcta) {
            document.getElementById(`opt-${i}`).classList.add("hidden-option");
            break;
        }
    }
}

function usePhone() {
    const q = gameQuestions[currentQuestionIndex];
    const disp = document.getElementById("lifeline-display");
    disp.innerHTML = `📞 Consejero académico: 'Estoy seguro que la respuesta correcta es: <b>${q.correcta}</b>'`;
    disp.classList.add("active");
}

function usePublic() {
    const q = gameQuestions[currentQuestionIndex];
    const disp = document.getElementById("lifeline-display");
    disp.innerHTML = `📊 Tendencia del público estudiantil: 84% opina que la respuesta correcta es: <b>${q.correcta}</b>`;
    disp.classList.add("active");
}

function endGame() {
    document.getElementById("game-screen").classList.remove("active");
    document.getElementById("end-screen").classList.add("active");
    document.getElementById("final-score-val").innerText = `${score} / 40`;
    
    let msg = "";
    if (score >= 35) msg = "¡Excelente rendimiento! Felicitaciones, tienes un cupo asegurado.";
    else if (score >= 24) msg = "Buen puntaje. Lograste aprobar el examen estándar.";
    else msg = "Sigue practicando los fundamentos para la próxima postulación.";
    
    document.getElementById("performance-comment").innerText = msg;
}

function restartGame() {
    document.getElementById("end-screen").classList.remove("active");
    document.getElementById("start-screen").classList.add("active");
}
