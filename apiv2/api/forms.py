from django import forms
from pagedown.widgets import AdminPagedownWidget
from api.models import BlogPost

class Blog_Post_Form(forms.ModelForm):
    blog_content = forms.CharField(widget=AdminPagedownWidget())

    class Meta:
        model = BlogPost
        fields = 'layout', 'title', 'date', 'categories', 'author', 'blog_content'
