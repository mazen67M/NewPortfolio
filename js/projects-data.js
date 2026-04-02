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
                title: "Repository Pattern Implementation",
                language: "csharp",
                code: `public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly ApplicationDbContext _context;
    private readonly DbSet<T> _dbSet;

    public GenericRepository(ApplicationDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }

    public async Task<T> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        await _context.SaveChangesAsync();
    }
}`
            },
            {
                title: "Product Recommendation Service",
                language: "csharp",
                code: `public class RecommendationService : IRecommendationService
{
    private readonly IProductRepository _productRepository;
    private readonly IOrderRepository _orderRepository;

    public async Task<IEnumerable<Product>> GetRecommendationsAsync(int userId)
    {
        // Get user's order history
        var userOrders = await _orderRepository.GetUserOrdersAsync(userId);
        var purchasedCategories = userOrders
            .SelectMany(o => o.OrderItems)
            .Select(i => i.Product.CategoryId)
            .Distinct();

        // Find similar products based on purchase history
        var recommendations = await _productRepository
            .GetProductsByCategoriesAsync(purchasedCategories)
            .OrderByDescending(p => p.Rating)
            .Take(10)
            .ToListAsync();

        return recommendations;
    }
}`
            }
        ],
        gallery: [
            { image: "../css/images/Ecommerce/Home.jpeg", caption: "Home Page" },
            { image: "../css/images/Ecommerce/Login.jpeg", caption: "Login Page" },
            { image: "../css/images/Ecommerce/Register.jpeg", caption: "Register Page" },
            { image: "../css/images/Ecommerce/EmailConfirm.jpeg", caption: "Email Confirmation Page" },
            { image: "../css/images/Ecommerce/ResetPassword.jpeg", caption: "Reset Password Page" },
            { image: "../css/images/Ecommerce/Home2.jpeg", caption: "Home 2Page" },
            { image: "../css/images/Ecommerce/Navbar.jpeg", caption: "Navbar" },
            { image: "../css/images/Ecommerce/Navbar2.jpeg", caption: "Navbar" },
            { image: "../css/images/Ecommerce/Shop.jpeg", caption: "Shop Page" },
            { image: "../css/images/Ecommerce/ProductDetails.png", caption: "Product Details Page" },
            { image: "../css/images/Ecommerce/FeaturedProducts.jpeg", caption: "Featured Products Page" },
            { image: "../css/images/Ecommerce/LatestArrival.jpeg", caption: "Last Arrival Page" },
            { image: "../css/images/Ecommerce/FAQ.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/Cart.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/Wishlist.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/UserOptions.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/Shipping.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/AdminDashboard.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/ProductManagement.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/ProductManagement2.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/CategoryManagement.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/BrandManagement.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/SalesReports.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/CategoryManagement.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/ManageProfile.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/UpdateProfile.jpeg", caption: "FAQ Page" },
            { image: "../css/images/Ecommerce/2FactorAuth.jpeg", caption: "FAQ Page" },


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
            <p>Blogify is a next-generation blogging platform engineered with ASP.NET Core MVC (.NET 9). It combines enterprise-grade security with a visually stunning, glassmorphism-inspired dark UI. This project demonstrates a full-stack approach to building scalable web applications, featuring complex role-based authorization, a complete admin dashboard, and rich content management capabilities.

🌟 Key Highlights
Modern Tech Stack: Built on the latest .NET 9 runtime for maximum performance.

Premium UI/UX: A fully custom Dark Theme featuring glassmorphism cards, gradient accents and smooth micro-animations.
</br>

<br>
Advanced Security: Implements ASP.NET Core Identity with a unique Account Approval Workflow—new users must be vetted by an Admin before accessing the system.
</br>

<br>
Three-Tier Roles: Granular access control for Admins (Dashboard/User Mgmt), Authors (Content Creation), and Users (Comments/Read).
</br>

<br>
🛠 Technical Architecture
Backend: ASP.NET Core MVC, C#, Entity Framework Core, SQL Server.
</br>

<br>
Frontend: Bootstrap 5, Custom CSS3 (Variables & Animations), jQuery, AJAX.
</br>

<br>
Patterns: MVC Architecture, Dependency Injection, Async/Await operations, ViewModel separation.
</br>

<br>
Security: CSRF Protection, SQL Injection prevention, File Upload Validation.
</br>

<br>
📊 Admin Dashboard
A centralized hub for administrators to view real-time statistics, approve pending user accounts, manage categories, and oversee all platform activity.</p>
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
        mainImage: "../css/images/3.png",
        githubLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        demoLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        date: "2024",
        role: "Backend Developer",
        duration: "2 months",
        team: "Solo Project",
        overview: `
            <p>Book Verse is a robust library management system API built with ASP.NET Core. It provides a complete solution for managing library operations including book inventory, member management, borrowing system, and book reviews.</p>
            <p>The API implements JWT-based authentication with refresh tokens, role-based authorization, and follows RESTful design principles. It includes email notifications via Google SMTP for overdue books and membership updates.</p>
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
            { image: "../css/images/3.png", caption: "API Documentation" },
            { image: "../css/images/3.png", caption: "Database Schema" }
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
        mainImage: "../css/images/4.png",
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners",
        date: "2024",
        role: "Backend Developer",
        duration: "3 months",
        team: "2 Developers",
        overview: `
            <p>CozyCorner is a modern furniture e-commerce platform designed to provide customers with a seamless online shopping experience for home furniture and decor. Built with ASP.NET Core MVC, the application features a clean, responsive design that showcases products beautifully.</p>
            <p>The platform includes essential e-commerce features like shopping cart, wishlist, user accounts, and a comprehensive admin panel for managing products, orders, and inventory. It implements Clean Architecture principles for maintainability and scalability.</p>
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
            { image: "../css/images/4.png", caption: "Homepage" },
            { image: "../css/images/4.png", caption: "Product Catalog" },
            { image: "../css/images/4.png", caption: "Shopping Cart" }
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
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/ArwaAlaa1/CozyCorners" }
        ]
    },
    "ARTifactify": {
        id: "ARTifactify",
        title: "ARTifactify",
        category: "E-Commerce Platform",
        categories: ["websites"],
        summary: "A furniture e-commerce website using ASP.NET Core MVC with Bootstrap, featuring shopping cart, wishlist functionality, and comprehensive admin product management system.",
        mainImage: "../css/images/Ecommerce/Login.jpeg",
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners",
        date: "2024",
        role: "Backend Developer",
        duration: "3 months",
        team: "2 Developers",
        overview: `
            <p>ARTifactify is a modern furniture e-commerce platform designed to provide customers with a seamless online shopping experience for home furniture and decor. Built with ASP.NET Core MVC, the application features a clean, responsive design that showcases products beautifully.</p>
            <p>The platform includes essential e-commerce features like shopping cart, wishlist, user accounts, and a comprehensive admin panel for managing products, orders, and inventory. It implements Clean Architecture principles for maintainability and scalability.</p>
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
            { image: "../css/images/4.png", caption: "Homepage" },
            { image: "../css/images/4.png", caption: "Product Catalog" },
            { image: "../css/images/4.png", caption: "Shopping Cart" }
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
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/ArwaAlaa1/CozyCorners" }
        ]
    },
    "SuperMarketSystem": {
        id: "SuperMarketSystem",
        title: "SuperMarketSystem",
        category: "E-Commerce Platform",
        categories: ["desktop", "websites"],
        summary: "A furniture e-commerce website using ASP.NET Core MVC with Bootstrap, featuring shopping cart, wishlist functionality, and comprehensive admin product management system.",
        mainImage: "../css/images/4.png",
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners",
        date: "2024",
        role: "Backend Developer",
        duration: "3 months",
        team: "2 Developers",
        overview: `
            <p>CozyCorner is a modern furniture e-commerce platform designed to provide customers with a seamless online shopping experience for home furniture and decor. Built with ASP.NET Core MVC, the application features a clean, responsive design that showcases products beautifully.</p>
            <p>The platform includes essential e-commerce features like shopping cart, wishlist, user accounts, and a comprehensive admin panel for managing products, orders, and inventory. It implements Clean Architecture principles for maintainability and scalability.</p>
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
            { image: "../css/images/4.png", caption: "Homepage" },
            { image: "../css/images/4.png", caption: "Product Catalog" },
            { image: "../css/images/4.png", caption: "Shopping Cart" }
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
        links: [
            { icon: "fab fa-github", text: "View Source Code", url: "https://github.com/ArwaAlaa1/CozyCorners" }
        ]
    },

    "restaurant-management-system": {
        id: "restaurant-management-system",
        title: "نظام إدارة المطعم",
        category: "تطبيق سطح المكتب",
        categories: ["desktop"],
        summary: "تطبيق ويندوز متكامل لإدارة عمليات المطعم، يشمل الطلبات، التوصيل، المخزون، سير عمل المطبخ، والتقارير المالية القائمة على الشيفت.",
        mainImage: "../css/images/restaurantSystem/1.jpeg",
        githubLink: "#",
        demoLink: "#",
        date: "2026",
        role: "مطور Full Stack",
        duration: "سيتم التحديث",
        team: "مشروع فردي",
        overview: `
            <p>نظام إدارة المطعم هو تطبيق سطح مكتب متكامل مبني بـ C# و WinForms، صُمِّم لتبسيط جميع جوانب تشغيل المطعم. من إدارة الطلبات وتذاكر المطبخ إلى تتبع التوصيل والتقارير المالية المرتبطة بالشيفت، يُوفِّر النظام مركزاً تشغيلياً متكاملاً للموظفين والإدارة.</p>
            <p>يتميز التطبيق بواجهة مستخدم حديثة بنمط داكن بلوحة ألوان احترافية بدرجات الرمادي الأردوازي والأزرق، مما يُتيح تجربة سلسة للكاشير وعمال المطبخ والمديرين. ويدعم النظام معالجة الطلبات بشكل فوري، وحساب رسوم التوصيل، وإدارة الشيفتات بتفاصيل مالية دقيقة.</p>
        `,
        features: [
            { icon: "fas fa-utensils", text: "إدارة كاملة للطلبات مع دعم الأكل في المطعم والتوصيل" },
            { icon: "fas fa-motorcycle", text: "إدارة التوصيل مع تتبع الرسوم وتعيين السائقين" },
            { icon: "fas fa-cash-register", text: "تقارير مالية مرتبطة بالشيفت وإدارة درج الكاشير" },
            { icon: "fas fa-receipt", text: "طباعة تذاكر المطبخ مع تفاصيل الأصناف والإضافات" },
            { icon: "fas fa-chart-bar", text: "لوحة تحكم بإحصائيات فورية وإجماليات يومية" },
            { icon: "fas fa-boxes", text: "إدارة المخزون ومتابعة الكميات" },
            { icon: "fas fa-users-cog", text: "صلاحيات مختلفة للكاشير وعمال المطبخ والمديرين" },
            { icon: "fas fa-moon", text: "واجهة مستخدم داكنة حديثة بنظام تصميم احترافي" }
        ],
        techStack: [
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "WinForms", icon: "devicon-dotnetcore-plain" },
            { name: ".NET", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Entity Framework", icon: "devicon-dot-net-plain" },
            { name: "LINQ", icon: "fas fa-database" }
        ],
        codeSnippets: [],
        gallery: [
            { image: "../css/images/restaurantSystem/1.jpeg", caption: "لقطة شاشة ١" },
            { image: "../css/images/restaurantSystem/2.jpeg", caption: "لقطة شاشة ٢" },
            { image: "../css/images/restaurantSystem/3.jpeg", caption: "لقطة شاشة ٣" },
            { image: "../css/images/restaurantSystem/4.jpeg", caption: "لقطة شاشة ٤" },
            { image: "../css/images/restaurantSystem/5.jpeg", caption: "لقطة شاشة ٥" },
            { image: "../css/images/restaurantSystem/6.jpeg", caption: "لقطة شاشة ٦" },
            { image: "../css/images/restaurantSystem/7.jpeg", caption: "لقطة شاشة ٧" },
            { image: "../css/images/restaurantSystem/8.jpeg", caption: "لقطة شاشة ٨" },
            { image: "../css/images/restaurantSystem/9.jpeg", caption: "لقطة شاشة ٩" },
            { image: "../css/images/restaurantSystem/10.jpeg", caption: "لقطة شاشة ١٠" },
            { image: "../css/images/restaurantSystem/11.jpeg", caption: "لقطة شاشة ١١" },
            { image: "../css/images/restaurantSystem/12.jpeg", caption: "لقطة شاشة ١٢" },
            { image: "../css/images/restaurantSystem/13.jpeg", caption: "لقطة شاشة ١٣" },
            { image: "../css/images/restaurantSystem/14.jpeg", caption: "لقطة شاشة ١٤" },
            { image: "../css/images/restaurantSystem/15.jpeg", caption: "لقطة شاشة ١٥" },
            { image: "../css/images/restaurantSystem/16.jpeg", caption: "لقطة شاشة ١٦" },
            { image: "../css/images/restaurantSystem/17.jpeg", caption: "لقطة شاشة ١٧" },
            { image: "../css/images/restaurantSystem/18.jpeg", caption: "لقطة شاشة ١٨" },
            { image: "../css/images/restaurantSystem/19.jpeg", caption: "لقطة شاشة ١٩" },
            { image: "../css/images/restaurantSystem/20.jpeg", caption: "لقطة شاشة ٢٠" },
            { image: "../css/images/restaurantSystem/21.jpeg", caption: "لقطة شاشة ٢١" },
            { image: "../css/images/restaurantSystem/22.jpeg", caption: "لقطة شاشة ٢٢" },
            { image: "../css/images/restaurantSystem/23.jpeg", caption: "لقطة شاشة ٢٣" },
            { image: "../css/images/restaurantSystem/24.jpeg", caption: "لقطة شاشة ٢٤" },
            { image: "../css/images/restaurantSystem/25.jpeg", caption: "لقطة شاشة ٢٥" },
            { image: "../css/images/restaurantSystem/26.jpeg", caption: "لقطة شاشة ٢٦" },
            { image: "../css/images/restaurantSystem/27.jpeg", caption: "لقطة شاشة ٢٧" },
            { image: "../css/images/restaurantSystem/28.jpeg", caption: "لقطة شاشة ٢٨" }
        ],
        challenges: [
            {
                challenge: "سيتم التحديث",
                solution: "سيتم التحديث"
            }
        ],
        links: [
            { icon: "fab fa-github", text: "عرض الكود المصدري", url: "#" }
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
