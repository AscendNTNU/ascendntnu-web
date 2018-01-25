from django.contrib import admin
from .models import Member, Sponsor, History, BlogPost
from .forms import Blog_Post_Form

# Register your models here.
admin.site.register(Member)
admin.site.register(Sponsor)
admin.site.register(History)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    form = Blog_Post_Form
    fields = 'layout', 'title', 'date', 'categories', 'author', 'blog_content'
