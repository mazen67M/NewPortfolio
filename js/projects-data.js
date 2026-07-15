// ========================================
// Projects Data - All project information
// ========================================

const projectsDetailData = {
    "e-commerce-platform": {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        category: "Full Stack Web Application",
        categories: ["websites", "other"],
        summary: "A full-featured ASP.NET Core MVC web application with Clean Architecture principles, payment integration, recommendation system, and comprehensive admin dashboard.",
        mainImage: "../css/images/Ecommerce/Home.jpeg",
        githubLink: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation",
        demoLink: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation",
        date: "2024",
        role: "Full Stack Developer",
        duration: "3 months",
        team: "Solo Project",
        overview: `
            <p>This E-Commerce Platform is a comprehensive online shopping solution built using ASP.NET Core MVC with Clean Architecture principles. The application provides a seamless shopping experience with features like product browsing, cart management, secure checkout, and an AI-powered recommendation system.</p>
            <p>The platform includes separate interfaces for customers and administrators, with the admin dashboard providing complete control over products, orders, and user management. The application implements industry-standard security practices including role-based authorization and secure payment processing.</p>

            <h4>🎯 The Problem</h4>
            <p>Standard e-commerce implementations often result in tightly coupled controllers that become unmaintainable as features grow. Adding a new payment provider typically requires changes across multiple layers. This project was built to demonstrate how Clean Architecture keeps e-commerce codebases extensible — adding a payment provider requires changing only one infrastructure class, not 15 files.</p>

            <h4>🏗 Architecture</h4>
            <ul>
                <li><strong>Presentation Layer:</strong> ASP.NET Core MVC Controllers and Razor Views</li>
                <li><strong>Application Layer:</strong> Service interfaces, DTOs, business logic</li>
                <li><strong>Domain Layer:</strong> Entities, business rules, repository interfaces</li>
                <li><strong>Infrastructure Layer:</strong> EF Core, SQL Server, Redis, payment providers</li>
            </ul>

            <h4>📊 By the Numbers</h4>
            <ul>
                <li>26 screens across customer and admin flows</li>
                <li>Redis caching reduces product listing load time significantly</li>
                <li>Role-based access: Customer, Admin</li>
                <li>Built solo in 3 months</li>
            </ul>
        `,
        features: [
            { icon: "fas fa-shopping-cart", text: "Complete shopping cart functionality with real-time updates" },
            { icon: "fas fa-robot", text: "AI-powered product recommendation system" },
            { icon: "fas fa-credit-card", text: "Secure payment integration with multiple providers" },
            { icon: "fas fa-user-shield", text: "Role-based authorization (Admin, Customer)" },
            { icon: "fas fa-box", text: "Product management with categories and inventory tracking" },
            { icon: "fas fa-truck", text: "Order tracking and management system" },
            { icon: "fas fa-search", text: "Advanced product search and filtering" },
            { icon: "fas fa-star", text: "Product reviews and ratings system" },
            { icon: "fas fa-chart-line", text: "Admin analytics dashboard" },
            { icon: "fas fa-mobile-alt", text: "Fully responsive design for all devices" }
        ],
        techStack: [
            { name: "ASP.NET Core MVC", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Clean Architecture", icon: "fas fa-layer-group" },
            { name: "Bootstrap 5", icon: "devicon-bootstrap-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Redis Caching", icon: "devicon-redis-plain" }
        ],
        codeSnippets: [
            {
                title: "Optimistic Concurrency — Preventing Inventory Race Conditions",
                language: "csharp",
                code: `// When two users try to buy the last item simultaneously,
// only one transaction succeeds — the other gets a friendly error.
public async Task<OrderResult> PlaceOrderAsync(OrderDto dto)
{
    await using var transaction = await _context.Database.BeginTransactionAsync();
    try
    {
        var product = await _context.Products
            .Where(p => p.Id == dto.ProductId)
            .FirstOrDefaultAsync();

        if (product.Stock < dto.Quantity)
            return OrderResult.Failed("Insufficient stock");

        product.Stock -= dto.Quantity;

        // EF Core automatically detects concurrent modifications
        // via RowVersion and throws DbUpdateConcurrencyException
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();

        return OrderResult.Success(order);
    }
    catch (DbUpdateConcurrencyException)
    {
        await transaction.RollbackAsync();
        return OrderResult.Failed("Item was just purchased by another user. Please refresh.");
    }
}`
            },
            {
                title: "Product Recommendation — Collaborative Filtering",
                language: "csharp",
                code: `// Recommends products based on what users with similar
// purchase history also bought (simplified collaborative filtering)
public async Task<IEnumerable<Product>> GetRecommendationsAsync(int userId)
{
    var userOrders = await _orderRepository.GetUserOrdersAsync(userId);
    var purchasedCategories = userOrders
        .SelectMany(o => o.OrderItems)
        .Select(i => i.Product.CategoryId)
        .Distinct();

    return await _productRepository
        .GetProductsByCategoriesAsync(purchasedCategories)
        .Where(p => !userOrders.SelectMany(o => o.OrderItems)
                               .Select(i => i.ProductId)
                               .Contains(p.Id))
        .OrderByDescending(p => p.Rating)
        .Take(10)
        .ToListAsync();
}`
            }
        ],
        gallery: [
            { image: "../css/images/Ecommerce/architecture.png", caption: "System Architecture — Clean Architecture Layers" },
            { image: "../css/images/Ecommerce/Home.jpeg", caption: "Home Page — Hero & Featured Products" },
            { image: "../css/images/Ecommerce/Login.jpeg", caption: "Login Page" },
            { image: "../css/images/Ecommerce/Register.jpeg", caption: "Registration Page" },
            { image: "../css/images/Ecommerce/EmailConfirm.jpeg", caption: "Email Confirmation Flow" },
            { image: "../css/images/Ecommerce/ResetPassword.jpeg", caption: "Password Reset Page" },
            { image: "../css/images/Ecommerce/Home2.jpeg", caption: "Home Page — Product Sections" },
            { image: "../css/images/Ecommerce/Navbar.jpeg", caption: "Navigation — Guest View" },
            { image: "../css/images/Ecommerce/Navbar2.jpeg", caption: "Navigation — Authenticated User" },
            { image: "../css/images/Ecommerce/Shop.jpeg", caption: "Shop — Product Catalog with Filters" },
            { image: "../css/images/Ecommerce/ProductDetails.png", caption: "Product Details — Reviews & Add to Cart" },
            { image: "../css/images/Ecommerce/FeaturedProducts.jpeg", caption: "Featured Products Section" },
            { image: "../css/images/Ecommerce/LatestArrival.jpeg", caption: "Latest Arrivals Section" },
            { image: "../css/images/Ecommerce/FAQ.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/Cart.jpeg", caption: "Shopping Cart" },
            { image: "../css/images/Ecommerce/Wishlist.jpeg", caption: "Wishlist Page" },
            { image: "../css/images/Ecommerce/UserOptions.jpeg", caption: "User Account Options" },
            { image: "../css/images/Ecommerce/Shipping.jpeg", caption: "Shipping & Address Form" },
            { image: "../css/images/Ecommerce/AdminDashboard.jpeg", caption: "Admin Dashboard — Overview" },
            { image: "../css/images/Ecommerce/ProductManagement.jpeg", caption: "Admin — Product Management" },
            { image: "../css/images/Ecommerce/ProductManagement2.jpeg", caption: "Admin — Add/Edit Product" },
            { image: "../css/images/Ecommerce/CategoryManagement.jpeg", caption: "Admin — Category Management" },
            { image: "../css/images/Ecommerce/BrandManagement.jpeg", caption: "Admin — Brand Management" },
            { image: "../css/images/Ecommerce/SalesReports.jpeg", caption: "Admin — Sales Reports & Analytics" },
            { image: "../css/images/Ecommerce/ManageProfile.jpeg", caption: "User — Profile Management" },
            { image: "../css/images/Ecommerce/UpdateProfile.jpeg", caption: "User — Edit Profile" },
            { image: "../css/images/Ecommerce/2FactorAuth.jpeg", caption: "Two-Factor Authentication Setup" },
        ],
        challenges: [
            {
                challenge: "Implementing real-time cart updates without page refresh",
                solution: "Used AJAX with JavaScript to handle cart operations asynchronously, updating the UI dynamically and providing instant feedback to users."
            },
            {
                challenge: "Building a scalable recommendation system",
                solution: "Implemented a collaborative filtering algorithm that analyzes user purchase patterns and product relationships to generate personalized recommendations."
            },
            {
                challenge: "Ensuring data consistency with concurrent orders",
                solution: "Implemented optimistic concurrency control with Entity Framework and transaction management to prevent race conditions in inventory updates."
            }
        ],
        lessonsLearned: [
            "Clean Architecture adds upfront complexity but pays dividends — adding Redis caching required zero changes to the Application layer.",
            "Self-referential recommendation systems (collaborative filtering) are prone to cold-start problems for new users. Next iteration would use content-based filtering as a fallback.",
            "Optimistic concurrency is critical for inventory systems — I learned this after discovering a race condition bug during testing."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation" },
            { icon: "fas fa-file-alt", text: "Documentation", url: "#" }
        ]
    },

    "blog-platform": {
        id: "blog-platform",
        title: "Blog Platform",
        category: "Content Management System",
        categories: ["websites"],
        summary: "A multi-user blogging system with ASP.NET Core MVC featuring Identity-based authentication, rich text editing, category management, and comprehensive commenting system.",
        mainImage: "../css/images/Blog/home.jpeg",
        githubLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        demoLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        date: "2024",
        role: "Full Stack Developer",
        duration: "2 months",
        team: "Solo Project",
        overview: `
            <p>Blogify is a next-generation blogging platform engineered with ASP.NET Core MVC (.NET 9), combining enterprise-grade security with a modern glassmorphism-inspired dark UI.</p>
            
            <h4>🌟 Key Highlights</h4>
            <ul>
                <li><strong>Modern Tech Stack:</strong> Built on .NET 9 runtime for maximum performance.</li>
                <li><strong>Premium UI/UX:</strong> Fully custom dark theme with glassmorphism cards, gradient accents, and smooth micro-animations.</li>
                <li><strong>Account Approval Workflow:</strong> New users must be vetted by an Admin before accessing the system — preventing spam and ensuring content quality.</li>
                <li><strong>Three-Tier Roles:</strong> Granular access control for Admins (Dashboard/User Management), Authors (Content Creation), and Readers (Comments).</li>
            </ul>

            <h4>🛠 Technical Architecture</h4>
            <ul>
                <li><strong>Backend:</strong> ASP.NET Core MVC, C#, Entity Framework Core, SQL Server</li>
                <li><strong>Frontend:</strong> Bootstrap 5, Custom CSS3, jQuery, AJAX</li>
                <li><strong>Patterns:</strong> MVC Architecture, Dependency Injection, Async/Await, ViewModel separation</li>
                <li><strong>Security:</strong> CSRF Protection, SQL Injection prevention, XSS sanitization, File Upload Validation</li>
            </ul>

            <h4>📊 Admin Dashboard</h4>
            <p>A centralized hub for administrators to view real-time statistics, approve pending user accounts, manage categories, and oversee all platform activity.</p>
        `,
        features: [
            { icon: "fas fa-user-lock", text: "ASP.NET Identity authentication with role-based access" },
            { icon: "fas fa-edit", text: "Rich text editor for creating formatted blog posts" },
            { icon: "fas fa-folder", text: "Category and tag management for organizing content" },
            { icon: "fas fa-comments", text: "Nested commenting system with moderation" },
            { icon: "fas fa-user-edit", text: "Author profiles and bio pages" },
            { icon: "fas fa-image", text: "Image upload and management" },
            { icon: "fas fa-search", text: "Full-text search functionality" },
        ],
        techStack: [
            { name: "ASP.NET Core MVC", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "ASP.NET Identity", icon: "fas fa-shield-alt" },
            { name: "Bootstrap 5", icon: "devicon-bootstrap-plain" },
            { name: "jQuery", icon: "devicon-jquery-plain" },
            { name: "AJAX", icon: "devicon-ajax-plain" },
            { name: "JS", icon: "devicon-javascript-plain" }


        ],
        codeSnippets: [
            {
                title: "Post Service Implementation",
                language: "csharp",
                code: `public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public PostService(IPostRepository postRepository, IMapper mapper)
    {
        _postRepository = postRepository;
        _mapper = mapper;
    }

    public async Task<PostDto> CreatePostAsync(CreatePostDto dto, string authorId)
    {
        var post = new Post
        {
            Title = dto.Title,
            Content = dto.Content,
            Slug = GenerateSlug(dto.Title),
            AuthorId = authorId,
            CategoryId = dto.CategoryId,
            CreatedAt = DateTime.UtcNow,
            IsPublished = dto.IsPublished
        };

        await _postRepository.AddAsync(post);
        return _mapper.Map<PostDto>(post);
    }

    private string GenerateSlug(string title)
    {
        return title.ToLower()
            .Replace(" ", "-")
            .Replace("--", "-");
    }
}`
            }
        ],
        gallery: [
            { image: "../css/images/Blog/home.jpeg", caption: "Blog Home" },
            { image: "../css/images/Blog/Login.jpeg", caption: "Login Page" },
            { image: "../css/images/Blog/register.jpeg", caption: "Register Page" },
            { image: "../css/images/Blog/Approve.jpeg", caption: "Approve Page" },
            { image: "../css/images/Blog/AuthorLogin.jpeg", caption: "Author Login Page" },
            { image: "../css/images/Blog/AuthorPostView.jpeg", caption: "Author Post View Page" },
            { image: "../css/images/Blog/postDetails.jpeg", caption: "Post Details Page" },

            { image: "../css/images/Blog/AdminView.jpeg", caption: "Admin View Page" },
            { image: "../css/images/Blog/AdminDashboard.jpeg", caption: "Admin Dashboard Page" },
            { image: "../css/images/Blog/ManageUsers.jpeg", caption: "Manage Users Page" },
            { image: "../css/images/Blog/CategoriesManagement.jpeg", caption: "Categories Management Page" },
            { image: "../css/images/Blog/UserOptions.jpeg", caption: "User Options Page" },
            { image: "../css/images/Blog/UserProfile.jpeg", caption: "User Profile Page" },
            { image: "../css/images/Blog/AddNewComment.jpeg", caption: "Add Comment Page" },
            { image: "../css/images/Blog/Comments.jpeg", caption: "Comments Page" },




        ],
        challenges: [
            {
                challenge: "Implementing SEO-friendly URLs with slugs",
                solution: "Created a slug generation service that converts post titles to URL-friendly strings while handling duplicates automatically."
            },
            {
                challenge: "Managing rich text content securely",
                solution: "Implemented content sanitization to prevent XSS attacks while preserving legitimate HTML formatting in blog posts."
            }
        ],
        lessonsLearned: [
            "Role-based access controls (RBAC) require clear authorization boundaries to prevent privilege escalation vulnerabilities.",
            "Client-side caching and debouncing are essential when implementing responsive search and comment loading filters.",
            "Designing a custom theme using pure CSS variables makes theme-switching extremely light and fast compared to framework classes."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/mazen67M/BlogProjectDotNET-9" }
        ]
    },

    "book-verse": {
        id: "book-verse",
        title: "Book Verse",
        category: "Library Management API",
        categories: ["apis"],
        summary: "A comprehensive library management system built with ASP.NET Core Web API featuring JWT authentication, book borrowing system, user roles, and a complete book reviewing platform.",
        mainImage: "../css/images/BookVerse/swagger-overview.png",
        githubLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        demoLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        date: "2024",
        role: "Backend Developer",
        duration: "2 months",
        team: "Solo Project",
        overview: `
            <p>Book Verse is a robust library management system API built with ASP.NET Core. It provides a complete solution for managing library operations including book inventory, member management, borrowing system, and book reviews.</p>

            <h4>🎯 The Problem</h4>
            <p>Libraries relying on manual records face challenges tracking borrowing status, sending overdue notifications, and managing multiple user roles. Book Verse provides a complete RESTful API solution that a library front-end (web or mobile) can consume to digitize these operations.</p>

            <h4>📡 API Endpoints (Key Routes)</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="background: var(--card-bg);">
                    <th style="padding: 8px; text-align:left;">Method</th>
                    <th style="padding: 8px; text-align:left;">Route</th>
                    <th style="padding: 8px; text-align:left;">Auth</th>
                    <th style="padding: 8px; text-align:left;">Description</th>
                </tr>
                <tr><td>POST</td><td>/api/auth/login</td><td>No</td><td>Authenticate user, return JWT</td></tr>
                <tr><td>POST</td><td>/api/auth/refresh</td><td>No</td><td>Refresh expired token</td></tr>
                <tr><td>GET</td><td>/api/books</td><td>Member</td><td>List all available books</td></tr>
                <tr><td>POST</td><td>/api/borrowings</td><td>Member</td><td>Borrow a book</td></tr>
                <tr><td>PUT</td><td>/api/borrowings/{id}/return</td><td>Member/Librarian</td><td>Return a borrowed book</td></tr>
                <tr><td>GET</td><td>/api/borrowings/overdue</td><td>Admin/Librarian</td><td>List overdue borrowings</td></tr>
                <tr><td>POST</td><td>/api/reviews</td><td>Member</td><td>Submit a book review</td></tr>
            </table>

            <h4>🔑 Authentication Flow</h4>
            <p>JWT access tokens (15-minute expiry) + refresh tokens (7-day expiry). Refresh tokens stored in database with rotation support to prevent token theft.</p>
        `,
        features: [
            { icon: "fas fa-book", text: "Complete book inventory management with CRUD operations" },
            { icon: "fas fa-key", text: "JWT authentication with refresh token support" },
            { icon: "fas fa-user-tag", text: "Role-based authorization (Admin, Librarian, Member)" },
            { icon: "fas fa-hand-holding", text: "Book borrowing and return system" },
            { icon: "fas fa-star", text: "Book reviews and rating system" },
            { icon: "fas fa-envelope", text: "Email notifications via Google SMTP" },
            { icon: "fas fa-calendar-alt", text: "Due date tracking and overdue alerts" },
            { icon: "fas fa-history", text: "Borrowing history for members" }
        ],
        techStack: [
            { name: "ASP.NET Core Web API", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "LINQ", icon: "fas fa-database" },
            { name: "JWT Auth", icon: "fas fa-lock" },
            { name: "Google SMTP", icon: "fas fa-envelope" }
        ],
        codeSnippets: [
            {
                title: "JWT Token Generation",
                language: "csharp",
                code: `public class TokenService : ITokenService
{
    private readonly IConfiguration _config;
    private readonly SymmetricSecurityKey _key;

    public TokenService(IConfiguration config)
    {
        _config = config;
        _key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["JWT:SecretKey"]));
    }

    public string CreateToken(ApplicationUser user, IList<string> roles)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.UserName)
        };

        claims.AddRange(roles.Select(role => 
            new Claim(ClaimTypes.Role, role)));

        var credentials = new SigningCredentials(
            _key, SecurityAlgorithms.HmacSha512Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = credentials
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        
        return tokenHandler.WriteToken(token);
    }
}`
            },
            {
                title: "Book Borrowing Logic",
                language: "csharp",
                code: `public async Task<BorrowingResult> BorrowBookAsync(int bookId, string memberId)
{
    var book = await _bookRepository.GetByIdAsync(bookId);
    
    if (book == null)
        return BorrowingResult.Failed("Book not found");
    
    if (book.AvailableCopies <= 0)
        return BorrowingResult.Failed("No copies available");

    var borrowing = new Borrowing
    {
        BookId = bookId,
        MemberId = memberId,
        BorrowDate = DateTime.UtcNow,
        DueDate = DateTime.UtcNow.AddDays(14),
        Status = BorrowingStatus.Active
    };

    book.AvailableCopies--;
    
    await _borrowingRepository.AddAsync(borrowing);
    await _unitOfWork.SaveChangesAsync();
    
    return BorrowingResult.Success(borrowing);
}`
            }
        ],
        gallery: [
            { image: "../css/images/BookVerse/swagger-overview.png", caption: "Swagger UI — API Documentation Overview" },
            { image: "../css/images/BookVerse/db-schema.png", caption: "Database Schema — ER Diagram" }
        ],
        challenges: [
            {
                challenge: "Implementing secure JWT authentication with refresh tokens",
                solution: "Created a token service that generates short-lived access tokens with long-lived refresh tokens, storing refresh tokens securely in the database."
            },
            {
                challenge: "Handling concurrent book borrowing requests",
                solution: "Implemented optimistic locking with row versioning to prevent multiple users from borrowing the last copy simultaneously."
            }
        ],
        lessonsLearned: [
            "Designing a RESTful API with refresh token rotation drastically increases protection against replay attacks.",
            "Handling concurrent transactions with pessimistic vs optimistic locking represents a key tradeoff in library reservation systems.",
            "Automated background worker notification tasks (SMTP) should always run in separate threads to avoid blocking API request execution loops."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/mazen67M/LibraryManagement-system-API" }
        ]
    },

    "cozy-corner": {
        id: "cozy-corner",
        title: "CozyCorner",
        category: "E-Commerce Platform",
        categories: ["websites"],
        summary: "A furniture e-commerce website using ASP.NET Core MVC with Bootstrap, featuring shopping cart, wishlist functionality, and comprehensive admin product management system.",
        mainImage: "../css/images/CozyCorner/Home.jpg",
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners",
        date: "2024",
        role: "Full Stack Developer (50/50 Collaboration)",
        duration: "3 months",
        team: "2 Developers — ArwaAlaa1 (collaborator)",
        overview: `
            <p>CozyCorner is a furniture e-commerce platform built as a collaborative project with a teammate. Both developers contributed equally to frontend and backend implementation. The application features a clean, responsive design that showcases furniture products beautifully.</p>
            
            <h4>👤 My Specific Contributions</h4>
            <ul>
                <li><strong>Backend Service Layer:</strong> Implemented the core logic for the Shopping Cart, Wishlist, and Order processing services.</li>
                <li><strong>Caching Layer:</strong> Integrated Redis caching for product catalogs and user sessions to optimize performance and reduce database load.</li>
                <li><strong>API Development:</strong> Created RESTful ASP.NET Core Web API endpoints to support AJAX-based cart operations from the client.</li>
                <li><strong>Frontend Integration:</strong> Collaborated on product catalog pages, cart management UI, and checkout workflows.</li>
            </ul>

            <p>The repository is hosted under my collaborator's GitHub account. My contributions are fully visible in the Git commit history.</p>
        `,
        features: [
            { icon: "fas fa-couch", text: "Beautiful product showcase with categories" },
            { icon: "fas fa-shopping-cart", text: "Fully functional shopping cart" },
            { icon: "fas fa-heart", text: "Wishlist for saving favorite items" },
            { icon: "fas fa-user", text: "User account management" },
            { icon: "fas fa-cogs", text: "Admin product management panel" },
            { icon: "fas fa-boxes", text: "Inventory tracking system" },
            { icon: "fas fa-filter", text: "Product filtering and sorting" },
            { icon: "fas fa-mobile-alt", text: "Responsive design for all devices" },
            { icon: "fas fa-bolt", text: "Redis caching for performance" },
            { icon: "fas fa-plug", text: "RESTful API endpoints" }
        ],
        techStack: [
            { name: "ASP.NET Core MVC", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Clean Architecture", icon: "fas fa-layer-group" },
            { name: "Bootstrap 5", icon: "devicon-bootstrap-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Redis", icon: "devicon-redis-plain" },
            { name: "ASP.NET Web API", icon: "fas fa-plug" }
        ],
        codeSnippets: [
            {
                title: "Shopping Cart Service",
                language: "csharp",
                code: `public class CartService : ICartService
{
    private readonly ICartRepository _cartRepository;
    private readonly IProductRepository _productRepository;
    private readonly ICacheService _cacheService;

    public async Task<CartDto> AddToCartAsync(int productId, int quantity, string userId)
    {
        var product = await _productRepository.GetByIdAsync(productId);
        
        if (product == null || product.Stock < quantity)
            throw new InvalidOperationException("Product unavailable");

        var cart = await GetOrCreateCartAsync(userId);
        
        var existingItem = cart.Items
            .FirstOrDefault(i => i.ProductId == productId);

        if (existingItem != null)
        {
            existingItem.Quantity += quantity;
        }
        else
        {
            cart.Items.Add(new CartItem
            {
                ProductId = productId,
                Quantity = quantity,
                Price = product.Price
            });
        }

        await _cartRepository.UpdateAsync(cart);
        await _cacheService.InvalidateAsync($"cart_{userId}");
        
        return MapToDto(cart);
    }
}`
            }
        ],
        gallery: [
            { image: "../css/images/CozyCorner/Home.jpg", caption: "CozyCorner Homepage" },
            { image: "../css/images/CozyCorner/Shop.jpg", caption: "CozyCorner Shop Catalog" }
        ],
        challenges: [
            {
                challenge: "Optimizing performance for large product catalogs",
                solution: "Implemented Redis caching for frequently accessed data and pagination with lazy loading for product listings."
            },
            {
                challenge: "Coordinating development between team members",
                solution: "Used Git branching strategy with feature branches and pull requests, along with clear API contracts for frontend-backend integration."
            }
        ],
        lessonsLearned: [
            "Collaborating on a shared git repository requires strict code formatting conventions and branch separation to prevent merge collisions.",
            "Standardizing on unified DTO schemas at the start of a joint project avoids major API mismatch issues during integration phases."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code (Collaborative Repo)", url: "https://github.com/ArwaAlaa1/CozyCorners" }
        ]
    },
    "ARTifactify": {
        id: "ARTifactify",
        title: "ARTifactify",
        category: "AI Mobile Application — Graduation Project",
        categories: ["websites", "apis"],
        summary: "An AI-powered mobile application that identifies artworks and cultural artifacts from photos. Built as a graduation project using Flutter (mobile) and ASP.NET Core Web API (backend), with a clean architecture approach across both platforms.",
        mainImage: "../css/images/ARTifactify/home.png",
        githubLink: "https://github.com/mazen67M/ARTifactify",
        demoLink: "#",
        date: "2025–2026",
        role: "Full Stack Developer (Mobile + Backend)",
        duration: "6 months",
        team: "Team Project — Graduation",
        overview: `
            <p>ARTifactify is an AI-powered mobile application that allows users to photograph any artwork or cultural artifact and instantly receive detailed identification, historical context, and provenance information. Built as my graduation project at the Faculty of Computers and Artificial Intelligence, it demonstrates cross-platform architecture across a Flutter mobile app and an ASP.NET Core Web API backend.</p>

            <h4>🎯 The Problem</h4>
            <p>Visitors to museums, galleries, and historical sites frequently encounter artworks with limited or no accessible information. Physical plaques are insufficient, and manual research requires time and expertise most visitors don't have. ARTifactify bridges this gap by making AI-powered identification instant and mobile-native.</p>

            <h4>🏗 Architecture</h4>
            <ul>
                <li><strong>Mobile (Flutter):</strong> Clean Architecture with BLoC state management. Feature-based folder structure. Dart null-safety throughout.</li>
                <li><strong>Backend (ASP.NET Core Web API):</strong> RESTful API with Clean Architecture layers. JWT authentication. EF Core + SQL Server for data persistence.</li>
                <li><strong>AI Integration:</strong> Uses Gemini Vision API to detect and extract details from the uploaded artwork image, which are then cross-referenced with our historical SQL database.</li>
            </ul>

            <h4>👤 My Role</h4>
            <p>Responsible for the full backend API (ASP.NET Core), authentication system (JWT + refresh tokens), mobile authentication flows (BLoC), and API integration on the Flutter side. Collaborated with team members on UI design and AI service selection.</p>
        `,
        features: [
            { icon: "fas fa-camera", text: "Photo-based artwork identification using Gemini Vision AI" },
            { icon: "fas fa-info-circle", text: "Detailed artwork information, artist bio, and historical context" },
            { icon: "fas fa-history", text: "Identification history saved per user account" },
            { icon: "fas fa-user-lock", text: "JWT authentication with refresh token support" },
            { icon: "fas fa-mobile-alt", text: "Native Flutter mobile app (Android & iOS)" },
            { icon: "fas fa-server", text: "ASP.NET Core Web API backend with Clean Architecture" },
            { icon: "fas fa-database", text: "SQL Server database with EF Core (Code-First)" },
            { icon: "fas fa-shield-alt", text: "Role-based authorization (Admin, User)" }
        ],
        techStack: [
            { name: "Flutter", icon: "devicon-flutter-plain" },
            { name: "Dart", icon: "devicon-dart-plain" },
            { name: "ASP.NET Core Web API", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "JWT Auth", icon: "fas fa-lock" },
            { name: "Clean Architecture", icon: "fas fa-layer-group" }
        ],
        codeSnippets: [
            {
                title: "Artifact Identification Controller",
                language: "csharp",
                code: `[HttpPost("identify")]
[Authorize]
public async Task<ActionResult<ArtifactIdentificationResultDto>> IdentifyArtifact([FromForm] IdentifyArtifactRequest request)
{
    if (request.Image == null || request.Image.Length == 0)
        return BadRequest("Invalid image file.");

    using var imageStream = request.Image.OpenReadStream();

    var result = await _artifactService.IdentifyAndRetrieveDetailsAsync(imageStream, User.GetUserId());

    if (!result.IsSuccess)
        return NotFound(result.ErrorMessage);

    return Ok(result.Data);
}`
            }
        ],
        gallery: [
            { image: "../css/images/ARTifactify/home.png", caption: "Scanning Interface — Upload Photo" },
            { image: "../css/images/ARTifactify/detail.png", caption: "Artwork Details & History Page" }
        ],
        challenges: [
            {
                challenge: "Integrating AI identification results with a consistent API response schema",
                solution: "Designed a wrapper DTO that normalizes AI provider responses into a consistent format, allowing the AI service to be swapped without changing the mobile app."
            },
            {
                challenge: "Managing complex authentication state across the Flutter app",
                solution: "Implemented BLoC state management with separate cubits for auth, identification, and history features, keeping business logic entirely out of UI widgets."
            },
            {
                challenge: "Ensuring the backend API was testable and maintainable as a graduation project",
                solution: "Applied Clean Architecture with clearly defined layers (Domain, Application, Infrastructure, API), using dependency injection throughout and interface-based repositories."
            }
        ],
        lessonsLearned: [
            "Wrapper design patterns are essential when integrating third-party APIs (like Gemini Vision), enabling swift service swaps without impacting the Flutter UI.",
            "BLoC state management keeps widget logic clean and testable, separating business logic completely from structural rendering rules.",
            "Clean architecture across both mobile (Flutter) and backend (ASP.NET Core) ensures consistency and ease of troubleshooting for all developers."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/mazen67M/ARTifactify" }
        ]
    },

    "SuperMarketSystem": {
        id: "SuperMarketSystem",
        title: "SuperMarket System",
        category: "POS & Inventory Management System",
        categories: ["desktop", "websites"],
        summary: "A comprehensive supermarket point-of-sale (POS) and inventory management system. Built with C# and WinForms (for POS desktop terminals) and an ASP.NET Core admin dashboard.",
        mainImage: "../css/images/SuperMarket/pos.png",
        githubLink: "https://github.com/mazen67M/SuperMarketSystem",
        demoLink: "#",
        date: "2024",
        role: "Full Stack Developer",
        duration: "3 months",
        team: "Solo Project",
        overview: `
            <p>SuperMarket System is a complete enterprise retail management system that connects desktop point-of-sale (POS) cash registers with a central web-based administrative panel. The desktop app is optimized for rapid cashier checkout using C# Windows Forms, while the manager's dashboard is built with ASP.NET Core Web API and SQL Server.</p>

            <h4>🎯 The Problem</h4>
            <p>Retail stores require high-speed local processing for checkouts that cannot depend on internet latency. However, business owners need central visibility of sales data and inventory levels in real-time. This system bridges local speed with cloud synchronization by maintaining local databases that sync with a central SQL Server database.</p>

            <h4>🏗 Architecture</h4>
            <ul>
                <li><strong>POS Terminal (Desktop):</strong> C# WinForms, local database caching for offline resilience, barcode scanner integration.</li>
                <li><strong>Admin Dashboard (Web):</strong> ASP.NET Core MVC, Entity Framework Core, SQL Server, Chart.js for sales analysis.</li>
                <li><strong>Synchronization Service:</strong> Lightweight background worker that batches sales transactions and pushes them to the central backend API when connected.</li>
            </ul>
        `,
        features: [
            { icon: "fas fa-cash-register", text: "Rapid cashier billing with barcode scanner support" },
            { icon: "fas fa-boxes", text: "Real-time stock alerts and automated inventory adjustments" },
            { icon: "fas fa-users-cog", text: "Multi-tier user levels (Cashier, Store Manager, System Admin)" },
            { icon: "fas fa-file-invoice-dollar", text: "Daily shift sales reporting and receipt printing (ESC/POS)" },
            { icon: "fas fa-chart-line", text: "Interactive dashboard with monthly sales analytics charts" },
            { icon: "fas fa-wifi", text: "Offline mode support for uninterrupted checkout service" }
        ],
        techStack: [
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "WinForms", icon: "devicon-dotnetcore-plain" },
            { name: "ASP.NET Core Web API", icon: "devicon-dotnetcore-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "Bootstrap 5", icon: "devicon-bootstrap-plain" }
        ],
        codeSnippets: [
            {
                title: "POS Inventory Deduction with Concurrency Control",
                language: "csharp",
                code: `// Execute checkout transaction on local sqlite/server db
public async Task<CheckoutResult> ProcessCheckoutAsync(List<CartItem> items, int cashierId)
{
    using var transaction = await _context.Database.BeginTransactionAsync();
    try
    {
        foreach(var item in items)
        {
            var product = await _context.Products.FindAsync(item.ProductId);
            if (product.StockLevel < item.Quantity)
                return CheckoutResult.Failed($"Insufficient stock for: {product.Name}");

            product.StockLevel -= item.Quantity;
        }

        var order = new SalesOrder
        {
            CashierId = cashierId,
            OrderDate = DateTime.UtcNow,
            TotalAmount = items.Sum(i => i.Price * i.Quantity)
        };

        _context.SalesOrders.Add(order);
        await _context.SaveChangesAsync();
        await transaction.CommitAsync();
        return CheckoutResult.Success();
    }
    catch (Exception)
    {
        await transaction.RollbackAsync();
        return CheckoutResult.Failed("Database transaction failed during checkout.");
    }
}`
            }
        ],
        gallery: [
            { image: "../css/images/SuperMarket/pos.png", caption: "Cashier POS Billing Terminal Interface" },
            { image: "../css/images/SuperMarket/dashboard.png", caption: "Admin Inventory & Sales Dashboard" }
        ],
        challenges: [
            {
                challenge: "Designing a highly responsive keyboard-driven billing flow for cashiers",
                solution: "Implemented hotkeys and custom keyboard shortcuts to ensure cashiers can navigate the entire POS checkout without using a mouse."
            },
            {
                challenge: "Syncing local POS sales transactions with the central server without causing data collisions",
                solution: "Designed an idempotent synchronization API with transaction retries and transaction IDs, ensuring no sales data was duplicated or lost."
            }
        ],
        lessonsLearned: [
            "Local offline-first databases require robust synchronization brokers to ensure sales transactions are batched without data loss.",
            "Keyboard-driven POS checkout layout design significantly improves daily cashier checkout speeds compared to standard mouse interactions."
        ],
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/mazen67M/SuperMarketSystem" }
        ]
    },

    "restaurant-management-system": {
        id: "restaurant-management-system",
        title: "Restaurant Management System — نظام إدارة المطعم",
        category: "Windows Desktop Application | تطبيق سطح المكتب",
        categories: ["desktop"],
        summary: "A comprehensive Windows desktop application to manage restaurant operations including orders, deliveries, inventory, kitchen workflow, and shift-based financial reporting. Built with C# and WinForms.",
        mainImage: "../css/images/restaurantSystem/1.jpeg",
        githubLink: "#",
        demoLink: "#",
        date: "2024",
        role: "Full Stack Developer | مطور كامل للمشروع",
        duration: "3 months | ٣ أشهر",
        team: "Solo Project | مشروع فردي",
        overview: `
            <p><strong>[EN]</strong> Restaurant Management System is a complete desktop application designed to streamline all aspects of restaurant operations. From fast-paced dine-in and delivery order processing to kitchen ticket routing, stock inventory control, and shift-based financial reporting, the system serves as a central operational hub for cashiers, kitchen staff, and managers.</p>
            <p>The application features a modern, clean dark-mode UI with a professional color scheme, ensuring high readability for staff in fast environments. It handles real-time ordering, automated delivery fee calculation based on zones, and secure cash drawer reconciliation.</p>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 1.5rem 0;" />
            <p><strong>[AR]</strong> نظام إدارة المطعم هو تطبيق سطح مكتب متكامل مصمم لتبسيط جميع جوانب تشغيل المطعم. من إدارة الطلبات السريعة (صالة وتيك أواي وتوصيل) إلى توجيه تذاكر المطبخ وتتبع المخزون والتقارير المالية المرتبطة بالشيفت، يوفر النظام مركزاً تشغيلياً متكاملاً للموظفين والإدارة.</p>
            <p>يتميز التطبيق بواجهة مستخدم حديثة بنمط داكن مريح للعين، مما يتيح تجربة سلسة للكاشير وعمال المطبخ والمديرين في بيئات العمل المزدحمة. ويدعم النظام معالجة الطلبات، وحساب رسوم التوصيل، وإدارة الشيفتات بدقة مالية عالية.</p>
        `,
        features: [
            { icon: "fas fa-utensils", text: "Complete order management (Dine-in, Takeaway, Delivery) | إدارة كاملة للطلب (صالة، سفري، توصيل)" },
            { icon: "fas fa-motorcycle", text: "Delivery zone management & driver dispatching | إدارة مناطق التوصيل وتوزيع الطيارين" },
            { icon: "fas fa-cash-register", text: "Shift-based cashier drawer reconciliation & reports | تقارير الوردية ومطابقة درج الكاشير" },
            { icon: "fas fa-receipt", text: "Asynchronous kitchen ticket printing (ESC/POS) | طباعة تذاكر المطبخ بشكل متزامن" },
            { icon: "fas fa-chart-bar", text: "Live sales dashboard & daily revenue graphs | لوحة تحكم فورية ورسوم بيانية للمبيعات" },
            { icon: "fas fa-boxes", text: "Inventory levels tracking & stock alerts | متابعة مستويات المخزون وتنبيهات النواقص" },
            { icon: "fas fa-users-cog", text: "Role-based permissions (Cashier, Kitchen, Admin) | نظام صلاحيات مرن حسب دور الموظف" },
            { icon: "fas fa-moon", text: "Modern dark-mode user interface | واجهة مستخدم داكنة وعصرية" }
        ],
        techStack: [
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "WinForms", icon: "devicon-dotnetcore-plain" },
            { name: ".NET Framework", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Entity Framework", icon: "devicon-dot-net-plain" },
            { name: "LINQ", icon: "fas fa-database" }
        ],
        codeSnippets: [
            {
                title: "Asynchronous ESC/POS Ticket Printing",
                language: "csharp",
                code: `// Prevents POS terminal freezing by offloading printing to a background queue
public void QueueKitchenReceipt(KitchenReceipt receipt)
{
    Task.Run(() =>
    {
        try
        {
            using (var printer = new EscPosPrinter(_printerSettings.KitchenPrinterIp))
            {
                printer.Initialize();
                printer.PrintText($"--- NEW TICKET: Order #{receipt.OrderId} ---");
                foreach (var item in receipt.Items)
                {
                    printer.PrintText($"{item.Quantity}x {item.Name} {item.Notes}");
                }
                printer.CutPaper();
            }
        }
        catch (Exception ex)
        {
            _logger.LogError("Kitchen printer failed: " + ex.Message);
            // Notify UI via status bar event
            OnPrinterError?.Invoke(this, new PrinterErrorEventArgs(receipt.OrderId, ex.Message));
        }
    });
}`
            }
        ],
        gallery: [
            { image: "../css/images/restaurantSystem/1.jpeg", caption: "Login Screen | شاشة تسجيل الدخول والتحقق" },
            { image: "../css/images/restaurantSystem/2.jpeg", caption: "Main Operations Dashboard | لوحة التحكم والعمليات الرئيسية" },
            { image: "../css/images/restaurantSystem/3.jpeg", caption: "Dine-In Table Selector | شاشة اختيار طاولات الصالة" },
            { image: "../css/images/restaurantSystem/4.jpeg", caption: "Order Menu & Item Grid | قائمة الطعام واختيار الأصناف" },
            { image: "../css/images/restaurantSystem/5.jpeg", caption: "Active Order Detail View | تفاصيل ومعاينة الطلب النشط" },
            { image: "../css/images/restaurantSystem/6.jpeg", caption: "Kitchen Order Processing Panel | شاشة متابعة وتجهيز المطبخ" },
            { image: "../css/images/restaurantSystem/7.jpeg", caption: "Delivery Order Tracking | شاشة إدارة وتتبع طلبات التوصيل" },
            { image: "../css/images/restaurantSystem/8.jpeg", caption: "Driver Assignment Screen | تعيين الكباتن والطيارين للطلبات" },
            { image: "../css/images/restaurantSystem/9.jpeg", caption: "Inventory Stock Levels | متابعة مستويات وجرد المخزون" },
            { image: "../css/images/restaurantSystem/10.jpeg", caption: "Menu Category Management | إدارة أقسام وتصنيفات المنيو" },
            { image: "../css/images/restaurantSystem/11.jpeg", caption: "Product Configurator (Add/Edit) | إدارة وتعديل أصناف قائمة الطعام" },
            { image: "../css/images/restaurantSystem/12.jpeg", caption: "User Account & Role Settings | إعدادات حسابات وصلاحيات المستخدمين" },
            { image: "../css/images/restaurantSystem/13.jpeg", caption: "Shift Ledger & Balance Entry | إغلاق الوردية وتسوية درج النقدية" },
            { image: "../css/images/restaurantSystem/14.jpeg", caption: "Daily Financial Summary Report | تقرير ملخص مالي للمبيعات اليومية" },
            { image: "../css/images/restaurantSystem/15.jpeg", caption: "Interactive Sales Charts | رسوم بيانية ومؤشرات المبيعات" },
            { image: "../css/images/restaurantSystem/16.jpeg", caption: "Customer Database Ledger | سجل وبيانات العملاء المشتركين" },
            { image: "../css/images/restaurantSystem/17.jpeg", caption: "Add Customer Dialog | نافذة إضافة عميل جديد" },
            { image: "../css/images/restaurantSystem/18.jpeg", caption: "Daily Operations Expense Log | سجل المصروفات والنثريات اليومية" },
            { image: "../css/images/restaurantSystem/19.jpeg", caption: "Supplier Directory | دليل وإدارة الموردين والشركات" },
            { image: "../css/images/restaurantSystem/20.jpeg", caption: "Purchase Orders Management | إدارة فواتير المشتريات وتوريد المخزن" },
            { image: "../css/images/restaurantSystem/21.jpeg", caption: "Order Archive Log | سجل أرشيف الطلبات السابقة" },
            { image: "../css/images/restaurantSystem/22.jpeg", caption: "Refund & Order Cancellation Drawer | إدارة المرتجعات وإلغاء الفواتير" },
            { image: "../css/images/restaurantSystem/23.jpeg", caption: "Database Backup Utility | أداة النسخ الاحتياطي واستعادة البيانات" },
            { image: "../css/images/restaurantSystem/24.jpeg", caption: "General System Settings | إعدادات النظام وتفضيلات التشغيل" },
            { image: "../css/images/restaurantSystem/25.jpeg", caption: "Server Diagnostics & Log Viewer | تشخيص الخادم وعرض سجل الأحداث" },
            { image: "../css/images/restaurantSystem/26.jpeg", caption: "Coupons & Discounts Setup | إعداد كوبونات الخصم والعروض" },
            { image: "../css/images/restaurantSystem/27.jpeg", caption: "Cash Drawer Activity History | سجل تتبع فتح وإغلاق درج الكاشير" },
            { image: "../css/images/restaurantSystem/28.jpeg", caption: "System Print Out Templates | قوالب فواتير وتقارير الطباعة" }
        ],
        challenges: [
            {
                challenge: "Design an efficient system for kitchen receipt printing (ESC/POS) that operates asynchronously without freezing the POS UI.",
                solution: "Designed a print broker using background worker thread queues and socket-level timeouts, ensuring that cashiers could print receipts instantly and continue checkout transactions without any lag."
            },
            {
                challenge: "Shift management and secure cash drawer reconciliation.",
                solution: "Implemented role-based shift logs where cashiers must enter their drawer balance at shift close, which is then automatically compared against system records to highlight discrepancies."
            }
        ],
        lessonsLearned: [
            "Offloading ESC/POS print actions to background printing queues prevents UI thread freezing at billing counters.",
            "Implementing cashier ledger closures ensures financial transparency and simplifies shift cash drawer audit reconciliation workflows."
        ],
        links: [
            { icon: "fab fa-github", text: "View Repository (Private Contract)", url: "#" }
        ]
    }
};

// Function to get project by ID
function getProjectById(projectId) {
    return projectsDetailData[projectId] || null;
}

// Function to get all projects
function getAllProjects() {
    return Object.values(projectsDetailData);
}

// Function to get related projects (excluding current)
function getRelatedProjects(currentProjectId, limit = 3) {
    return Object.values(projectsDetailData)
        .filter(project => project.id !== currentProjectId)
        .slice(0, limit);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsDetailData, getProjectById, getAllProjects, getRelatedProjects };
}
