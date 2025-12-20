// ========================================
// Projects Data - All project information
// ========================================

const projectsDetailData = {
    "e-commerce-platform": {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        category: "Full Stack Web Application",
        summary: "A full-featured ASP.NET Core MVC web application with Clean Architecture principles, payment integration, recommendation system, and comprehensive admin dashboard.",
        mainImage: "../css/images/Ecommerce/1.png",
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
            { image: "../css/images/Ecommerce/1.png", caption: "Home Page" },
            { image: "../css/images/Ecommerce/1.png", caption: "Product Listing" },
            { image: "../css/images/Ecommerce/1.png", caption: "Shopping Cart" },
            { image: "../css/images/Ecommerce/1.png", caption: "Admin Dashboard" }
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
        summary: "A multi-user blogging system with ASP.NET Core MVC featuring Identity-based authentication, rich text editing, category management, and comprehensive commenting system.",
        mainImage: "../css/images/Blog/blog1.png",
        githubLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        demoLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        date: "2024",
        role: "Full Stack Developer",
        duration: "2 months",
        team: "Solo Project",
        overview: `
            <p>This Blog Platform is a robust content management system built with ASP.NET Core MVC and .NET 9. It provides a complete blogging solution with user authentication, post management, and interactive features like comments and categories.</p>
            <p>The platform supports multiple user roles including Authors, Editors, and Administrators, each with specific permissions. It features a modern, responsive design with a rich text editor for creating engaging content.</p>
        `,
        features: [
            { icon: "fas fa-user-lock", text: "ASP.NET Identity authentication with role-based access" },
            { icon: "fas fa-edit", text: "Rich text editor for creating formatted blog posts" },
            { icon: "fas fa-folder", text: "Category and tag management for organizing content" },
            { icon: "fas fa-comments", text: "Nested commenting system with moderation" },
            { icon: "fas fa-user-edit", text: "Author profiles and bio pages" },
            { icon: "fas fa-image", text: "Image upload and management" },
            { icon: "fas fa-search", text: "Full-text search functionality" },
            { icon: "fas fa-rss", text: "RSS feed support" }
        ],
        techStack: [
            { name: "ASP.NET Core MVC", icon: "devicon-dotnetcore-plain" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "Entity Framework Core", icon: "devicon-dot-net-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "ASP.NET Identity", icon: "fas fa-shield-alt" },
            { name: "Bootstrap 5", icon: "devicon-bootstrap-plain" }
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
            { image: "../css/images/Blog/blog1.png", caption: "Blog Home" },
            { image: "../css/images/Blog/blog2.png", caption: "Post Editor" },
            { image: "../css/images/Blog/blog3.png", caption: "User Dashboard" }
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
