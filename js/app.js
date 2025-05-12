document.addEventListener('DOMContentLoaded', function() {
    // Referencia a elementos principales
    const contentContainer = document.getElementById('content-container');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    // Por defecto, cargar el dashboard
    loadContent('dashboard');
    
    // Agregar eventos click a todos los elementos del menú lateral
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Actualizar clase activa
            sidebarItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Cargar el contenido seleccionado
            loadContent(page);
        });
    });
    
    // Función para cargar el contenido dinámicamente
    function loadContent(page) {
        // Según la página seleccionada, cargar el contenido correspondiente
        switch(page) {
            case 'dashboard':
                loadDashboard();
                break;
            case 'informacion-personal':
                loadInformacionPersonal();
                break;
            case 'educacion':
                loadEducacion();
                break;
            case 'habilidades':
                loadHabilidades();
                break;
            case 'empleos':
                loadEmpleos();
                break;
            case 'analisis':
                loadAnalisis();
                break;
            case 'configuracion':
                loadConfiguracion();
                break;
            default:
                loadDashboard();
        }
    }
    
    // Función para cargar el dashboard
    function loadDashboard() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Dashboard</h2>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="alert alert-warning" role="alert">
                        <i class="fas fa-exclamation-triangle me-2"></i> Tu perfil está al 65% de completitud. Completa tu educación y habilidades para mejorar tu visibilidad.
                    </div>
                </div>
            </div>
            
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-graduation-cap me-2"></i>Educación</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <p>Colegio Nacional "San Martín"</p>
                            <p>Bachillerato completo - 2022</p>
                            <button class="btn btn-sm btn-outline-primary mt-2">
                                <i class="fas fa-plus me-1"></i> Añadir certificados
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-certificate me-2"></i>Habilidades</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <div class="mb-2">Trabajo en equipo</div>
                            <div class="mb-2">Comunicación</div>
                            <div class="mb-2">Proactividad</div>
                            <button class="btn btn-sm btn-outline-primary mt-2">
                                <i class="fas fa-plus me-1"></i> Añadir habilidades
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-bullseye me-2"></i>Intereses</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <div class="mb-2">Tecnología</div>
                            <div class="mb-2">Atención al cliente</div>
                            <div class="mb-2">Administración</div>
                            <button class="btn btn-sm btn-outline-primary mt-2">
                                <i class="fas fa-edit me-1"></i> Editar intereses
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-briefcase me-2"></i>Empleos sugeridos</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <p class="text-primary">3 oportunidades nuevas esta semana</p>
                            <button class="btn btn-sm btn-primary mt-2">
                                <i class="fas fa-eye me-1"></i> Ver oportunidades
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
    }
    
    // Función para cargar la sección de información personal
    function loadInformacionPersonal() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Información Personal</h2>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-user me-2"></i>Datos Personales</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-edit me-1"></i> Editar
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Nombre Completo</label>
                            <p>Carlos Andrés Martínez López</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Fecha de Nacimiento</label>
                            <p>15 de marzo de 2004</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Documento de Identidad</label>
                            <p>1234567890</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Género</label>
                            <p>Masculino</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-map-marker-alt me-2"></i>Ubicación</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-edit me-1"></i> Editar
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Ciudad</label>
                            <p>Bogotá</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Dirección</label>
                            <p>Calle 123 #45-67</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Barrio</label>
                            <p>Los Pinos</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Estrato</label>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-phone-alt me-2"></i>Contacto</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-edit me-1"></i> Editar
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Teléfono Móvil</label>
                            <p>300 123 4567</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Email</label>
                            <p>carlos.martinez@email.com</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Teléfono Fijo</label>
                            <p>601 765 4321</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Email Alternativo</label>
                            <p>carlosmartinez123@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
    }
    
    // Función para cargar la sección de educación
    function loadEducacion() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Educación</h2>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-graduation-cap me-2"></i>Educación Formal</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-plus me-1"></i> Añadir
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="mb-4 p-3 border rounded">
                        <div class="d-flex justify-content-between">
                            <h5>Bachillerato</h5>
                            <div>
                                <button class="btn btn-sm btn-outline-secondary me-2">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-danger">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <p><strong>Institución:</strong> Colegio Nacional "San Martín"</p>
                                <p><strong>Título obtenido:</strong> Bachiller Académico</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Año de inicio:</strong> 2016</p>
                                <p><strong>Año de finalización:</strong> 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-certificate me-2"></i>Cursos y Certificaciones</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-plus me-1"></i> Añadir
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="p-4 text-center">
                        <i class="fas fa-award fa-3x mb-3 text-muted"></i>
                        <h5>Aún no has añadido cursos o certificaciones</h5>
                        <p class="text-muted">Los cursos y certificados te ayudan a destacar y demostrar tus conocimientos específicos.</p>
                        <button class="btn btn-primary mt-2">
                            <i class="fas fa-plus me-1"></i> Añadir mi primer curso
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h5><i class="fas fa-lightbulb me-2"></i>Recomendaciones para ti</h5>
                </div>
                <div class="dashboard-card-body">
                    <h6 class="mb-3">Basado en tu perfil, te recomendamos estos cursos:</h6>
                    
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h6>Fundamentos de Servicio al Cliente</h6>
                                    <p class="text-muted">Curso básico para desarrollar habilidades de atención al cliente</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge bg-success me-2">Gratuito</span>
                                        <span class="text-muted">20 horas</span>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <button class="btn btn-sm btn-outline-primary">Ver más información</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h6>Excel para principiantes</h6>
                                    <p class="text-muted">Aprende lo básico de Excel para mejorar tu empleabilidad</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge bg-success me-2">Gratuito</span>
                                        <span class="text-muted">15 horas</span>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <button class="btn btn-sm btn-outline-primary">Ver más información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
    }
    
    // Función para cargar la sección de habilidades
    function loadHabilidades() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Habilidades</h2>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-tools me-2"></i>Habilidades Técnicas</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-plus me-1"></i> Añadir
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="mb-3">
                        <div class="skill-badge">
                            <div>
                                <strong>Microsoft Word</strong>
                                <div class="skill-level">
                                    <div class="skill-progress bg-primary" style="width: 75%;"></div>
                                </div>
                            </div>
                            <span class="text-muted">Intermedio</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="skill-badge">
                            <div>
                                <strong>Microsoft PowerPoint</strong>
                                <div class="skill-level">
                                    <div class="skill-progress bg-primary" style="width: 60%;"></div>
                                </div>
                            </div>
                            <span class="text-muted">Básico</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-users me-2"></i>Habilidades Blandas</h5>
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-plus me-1"></i> Añadir
                    </button>
                </div>
                <div class="dashboard-card-body">
                    <div class="mb-3">
                        <div class="skill-badge">
                            <div>
                                <strong>Trabajo en equipo</strong>
                                <div class="skill-level">
                                    <div class="skill-progress bg-success" style="width: 85%;"></div>
                                </div>
                            </div>
                            <span class="text-muted">Avanzado</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="skill-badge">
                            <div>
                                <strong>Comunicación</strong>
                                <div class="skill-level">
                                    <div class="skill-progress bg-success" style="width: 80%;"></div>
                                </div>
                            </div>
                            <span class="text-muted">Avanzado</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="skill-badge">
                            <div>
                                <strong>Proactividad</strong>
                                <div class="skill-level">
                                    <div class="skill-progress bg-success" style="width: 90%;"></div>
                                </div>
                            </div>
                            <span class="text-muted">Experto</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h5><i class="fas fa-plus-circle me-2"></i>Añadir Nuevas Habilidades</h5>
                </div>
                <div class="dashboard-card-body">
                    <p>Selecciona nuevas habilidades para añadir a tu perfil:</p>
                    
                    <div class="mb-3">
                        <h6>Habilidades técnicas sugeridas:</h6>
                        <div class="d-flex flex-wrap">
                            <div class="skill-tag m-1">Microsoft Excel</div>
                            <div class="skill-tag m-1">Internet</div>
                            <div class="skill-tag m-1">Correo electrónico</div>
                            <div class="skill-tag m-1">Redes sociales</div>
                            <div class="skill-tag m-1">Google Drive</div>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <h6>Habilidades blandas sugeridas:</h6>
                        <div class="d-flex flex-wrap">
                            <div class="skill-tag m-1">Creatividad</div>
                            <div class="skill-tag m-1">Puntualidad</div>
                            <div class="skill-tag m-1">Responsabilidad</div>
                            <div class="skill-tag m-1">Adaptabilidad</div>
                            <div class="skill-tag m-1">Resolución de problemas</div>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary mt-3">
                        <i class="fas fa-save me-1"></i> Guardar habilidades seleccionadas
                    </button>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
        
        // Agregar funcionalidad para seleccionar habilidades
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    }
    
    // Función para cargar la sección de empleos
    function loadEmpleos() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Oportunidades de Empleo</h2>
            </div>
            
            <div class="alert alert-info" role="alert">
                <i class="fas fa-info-circle me-2"></i> Basado en tu perfil, hemos encontrado 8 oportunidades que podrían interesarte.
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header d-flex justify-content-between align-items-center">
                    <h5><i class="fas fa-star me-2"></i>Oportunidades Destacadas</h5>
                    <div>
                        <select class="form-select form-select-sm">
                            <option selected>Ordenar por relevancia</option>
                            <option>Más recientes</option>
                            <option>Mejor salario</option>
                        </select>
                    </div>
                </div>
                <div class="dashboard-card-body">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <h5 class="mb-1">Asistente de Atención al Cliente</h5>
                                    <p class="mb-1 text-muted">Supermercados ABC</p>
                                </div>
                                <span class="badge bg-primary">Nuevo</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-map-marker-alt text-muted me-1"></i> Bogotá
                                <span class="mx-2">|</span>
                                <i class="fas fa-money-bill-wave text-muted me-1"></i> $1.200.000 - $1.500.000
                                <span class="mx-2">|</span>
                                <i class="fas fa-clock text-muted me-1"></i> Tiempo completo
                            </div>
                            <p>Se busca asistente para atención al cliente con excelente actitud de servicio para supermercado. No se requiere experiencia previa.</p>
                            <div class="d-flex">
                                <button class="btn btn-primary me-2">Ver detalles</button>
                                <button class="btn btn-outline-primary">Aplicar ahora</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <h5 class="mb-1">Auxiliar Administrativo</h5>
                                    <p class="mb-1 text-muted">Empresa de Servicios XYZ</p>
                                </div>
                                <span class="badge bg-success">Alta compatibilidad</span>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-map-marker-alt text-muted me-1"></i> Bogotá
                                <span class="mx-2">|</span>
                                <i class="fas fa-money-bill-wave text-muted me-1"></i> $1.100.000 - $1.300.000
                                <span class="mx-2">|</span>
                                <i class="fas fa-clock text-muted me-1"></i> Tiempo completo
                            </div>
                            <p>Buscamos auxiliar administrativo para apoyar tareas de oficina. Ideal para recién egresados o estudiantes de últimos semestres.</p>
                            <div class="d-flex">
                                <button class="btn btn-primary me-2">Ver detalles</button>
                                <button class="btn btn-outline-primary">Aplicar ahora</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <h5 class="mb-1">Mensajero</h5>
                                    <p class="mb-1 text-muted">Distribuidora Nacional</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <i class="fas fa-map-marker-alt text-muted me-1"></i> Bogotá
                                <span class="mx-2">|</span>
                                <i class="fas fa-money-bill-wave text-muted me-1"></i> $1.000.000 - $1.200.000
                                <span class="mx-2">|</span>
                                <i class="fas fa-clock text-muted me-1"></i> Tiempo completo
                            </div>
                            <p>Se requiere mensajero con moto propia para entregas en Bogotá. Se pagan viáticos y combustible.</p>
                            <div class="d-flex">
                                <button class="btn btn-primary me-2">Ver detalles</button>
                                <button class="btn btn-outline-primary">Aplicar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h5><i class="fas fa-filter me-2"></i>Filtros</h5>
                </div>
                <div class="dashboard-card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Ubicación</label>
                            <select class="form-select">
                                <option selected>Todas las ubicaciones</option>
                                <option>Bogotá</option>
                                <option>Medellín</option>
                                <option>Cali</option>
                                <option>Barranquilla</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Tipo de empleo</label>
                            <select class="form-select">
                                <option selected>Todos los tipos</option>
                                <option>Tiempo completo</option>
                                <option>Medio tiempo</option>
                                <option>Por horas</option>
                                <option>Temporal</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Salario mínimo</label>
                            <select class="form-select">
                                <option selected>Cualquier salario</option>
                                <option>$1.000.000</option>
                                <option>$1.200.000</option>
                                <option>$1.500.000</option>
                                <option>$2.000.000</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-primary">
                        <i class="fas fa-search me-1"></i> Aplicar filtros
                    </button>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
    }
    
    // Función para cargar la sección de análisis
    function loadAnalisis() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Análisis de Potencial</h2>
            </div>
            
            <div class="dashboard-card mb-4">
                <div class="dashboard-card-header">
                    <h5><i class="fas fa-tachometer-alt me-2"></i>Índice de Empleabilidad</h5>
                </div>
                <div class="dashboard-card-body">
                    <div class="row align-items-center">
                        <div class="col-md-4 text-center">
                            <div class="progress-circle">
                                <div class="progress-content">
                                    <h1 class="display-4">65</h1>
                                    <p>de 100</p>
                                </div>
                            </div>
                            <p class="mt-3">Tu nivel actual es <strong>Intermedio</strong></p>
                        </div>
                        <div class="col-md-8">
                            <h5>¿Cómo mejorar tu índice?</h5>
                            <p>Estas son algunas recomendaciones para aumentar tu empleabilidad:</p>
                            <div class="d-flex flex-wrap">
                                <div class="recommendation-badge">
                                    <i class="fas fa-language me-1"></i> Inglés básico (+10)
                                </div>
                                <div class="recommendation-badge">
                                    <i class="fas fa-laptop-code me-1"></i> Excel básico (+8)
                                </div>
                                <div class="recommendation-badge">
                                    <i class="fas fa-certificate me-1"></i> Servicio al cliente (+7)
                                </div>
                                <div class="recommendation-badge">
                                    <i class="fas fa-tasks me-1"></i> Completar perfil (+5)
                                </div>
                            </div>
                            
                            <div class="mt-3">
                                <button class="btn btn-outline-primary">Ver más recomendaciones</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <div class="dashboard-card h-100">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-bullseye me-2"></i>Sectores Recomendados</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <p>Basado en tu perfil, estos son los sectores más adecuados para ti:</p>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Comercio y ventas</span>
                                    <span>85%</span>
                                </div>
                                <div class="sector-bar">
                                    <div class="sector-progress bg-success" style="width: 85%;">85%</div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Servicios administrativos</span>
                                    <span>75%</span>
                                </div>
                                <div class="sector-bar">
                                    <div class="sector-progress bg-primary" style="width: 75%;">75%</div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Atención al cliente</span>
                                    <span>70%</span>
                                </div>
                                <div class="sector-bar">
                                    <div class="sector-progress bg-primary" style="width: 70%;">70%</div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Logística y distribución</span>
                                    <span>60%</span>
                                </div>
                                <div class="sector-bar">
                                    <div class="sector-progress bg-info" style="width: 60%;">60%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="dashboard-card h-100">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-user-friends me-2"></i>Comparativa</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <p>Así te comparas con otros usuarios similares:</p>
                            
                            <div class="comparison-item">
                                <div class="d-flex justify-content-between">
                                    <span>Habilidades blandas</span>
                                    <small class="text-success">Por encima del promedio</small>
                                </div>
                                <div class="comparison-progress">
                                    <div class="comparison-bar bg-success" style="width: 80%;"></div>
                                </div>
                            </div>
                            
                            <div class="comparison-item">
                                <div class="d-flex justify-content-between">
                                    <span>Habilidades técnicas</span>
                                    <small class="text-warning">En el promedio</small>
                                </div>
                                <div class="comparison-progress">
                                    <div class="comparison-bar bg-warning" style="width: 60%;"></div>
                                </div>
                            </div>
                            
                            <div class="comparison-item">
                                <div class="d-flex justify-content-between">
                                    <span>Cursos y certificaciones</span>
                                    <small class="text-danger">Por debajo del promedio</small>
                                </div>
                                <div class="comparison-progress">
                                    <div class="comparison-bar bg-danger" style="width: 30%;"></div>
                                </div>
                            </div>
                            
                            <div class="comparison-item">
                                <div class="d-flex justify-content-between">
                                    <span>Completitud del perfil</span>
                                    <small class="text-warning">En el promedio</small>
                                </div>
                                <div class="comparison-progress">
                                    <div class="comparison-bar bg-warning" style="width: 65%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-header">
                    <h5><i class="fas fa-road me-2"></i>Plan de Desarrollo Sugerido</h5>
                </div>
                <div class="dashboard-card-body">
                    <p>Aquí tienes un plan personalizado para mejorar tu empleabilidad:</p>
                    
                    <div class="development-step">
                        <h5>1. Formación básica adicional (1-3 meses)</h5>
                        <p>Completa un curso básico de Excel y servicio al cliente para mejorar tu perfil inmediatamente.</p>
                    </div>
                    
                    <div class="development-step">
                        <h5>2. Primeras experiencias (3-6 meses)</h5>
                        <p>Busca oportunidades en comercio o atención al cliente, incluso trabajos temporales o de medio tiempo.</p>
                    </div>
                    
                    <div class="development-step">
                        <h5>3. Especialización (6-12 meses)</h5>
                        <p>Una vez tengas experiencia básica, enfócate en un área específica como ventas o administración.</p>
                    </div>
                    
                    <div class="mt-4">
                        <button class="btn btn-primary">
                            <i class="fas fa-download me-1"></i> Descargar Plan PDF
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
        
        // Agregar funcionalidad para los badges de recomendación
        const recommendationBadges = document.querySelectorAll('.recommendation-badge');
        recommendationBadges.forEach(badge => {
            badge.addEventListener('click', function() {
                // Aquí se podría implementar la funcionalidad de mostrar detalles de la recomendación
                alert('Detalles de la recomendación: ' + this.textContent.trim());
            });
        });
    }
    
    // Función para cargar la sección de configuración
    function loadConfiguracion() {
        const content = `
            <div class="page-header">
                <h2 class="mb-4">Configuración</h2>
            </div>
            
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-user-cog me-2"></i>Ajustes de Cuenta</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <i class="fas fa-user me-2"></i> Perfil
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-lock me-2"></i> Seguridad
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-bell me-2"></i> Notificaciones
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-eye me-2"></i> Privacidad
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fas fa-trash me-2"></i> Eliminar cuenta
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-8">
                    <div class="dashboard-card mb-4">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-user me-2"></i>Ajustes de Perfil</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <div class="mb-4 text-center">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNjAiIGZpbGw9IiNlMGUwZTAiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjQ1IiByPSIyMCIgZmlsbD0iIzllOWU5ZSIvPjxwYXRoIGQ9Ik02MCw3NSBDNDAsNzUgMjUsOTAgMjUsMTEwIEw5NSwxMTAgQzk1LDkwIDgwLDc1IDYwLDc1IFoiIGZpbGw9IiM5ZTllOWUiLz48L3N2Zz4=" alt="Foto de perfil" class="profile-image mb-3">
                                <div>
                                    <button class="btn btn-sm btn-outline-primary">
                                        <i class="fas fa-camera me-1"></i> Cambiar foto
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger">
                                        <i class="fas fa-trash me-1"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                            
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Nombre de usuario</label>
                                    <input type="text" class="form-control" id="username" value="carlosm2004">
                                </div>
                                
                                <div class="mb-3">
                                    <label for="email" class="form-label">Correo electrónico</label>
                                    <input type="email" class="form-control" id="email" value="carlos.martinez@email.com">
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Tipo de perfil</label>
                                    <select class="form-select">
                                        <option selected>Bachiller</option>
                                        <option>Universitario</option>
                                        <option>Recién Graduado</option>
                                        <option>Profesional</option>
                                        <option>Posgraduado</option>
                                    </select>
                                    <div class="form-text">
                                        Cambiar tu tipo de perfil ajustará las recomendaciones y oportunidades.
                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Visibilidad del perfil</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="profileVisibility" id="visibility1" checked>
                                        <label class="form-check-label" for="visibility1">
                                            Público (visible para empresas y reclutadores)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="profileVisibility" id="visibility2">
                                        <label class="form-check-label" for="visibility2">
                                            Semi-privado (solo visible para empresas seleccionadas)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="profileVisibility" id="visibility3">
                                        <label class="form-check-label" for="visibility3">
                                            Privado (solo visible cuando aplico a empleos)
                                        </label>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-1"></i> Guardar cambios
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="dashboard-card">
                        <div class="dashboard-card-header">
                            <h5><i class="fas fa-bell me-2"></i>Preferencias de Notificaciones</h5>
                        </div>
                        <div class="dashboard-card-body">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="notif1" checked>
                                <label class="form-check-label" for="notif1">
                                    Nuevas oportunidades de empleo
                                </label>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="notif2" checked>
                                <label class="form-check-label" for="notif2">
                                    Cursos recomendados
                                </label>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="notif3" checked>
                                <label class="form-check-label" for="notif3">
                                    Actualizaciones del sistema
                                </label>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="notif4">
                                <label class="form-check-label" for="notif4">
                                    Boletín semanal
                                </label>
                            </div>
                            
                            <button class="btn btn-primary mt-2">
                                <i class="fas fa-save me-1"></i> Guardar preferencias
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentContainer.innerHTML = content;
    }
}); 