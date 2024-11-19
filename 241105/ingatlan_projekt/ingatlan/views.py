from django.shortcuts import render, get_object_or_404, redirect
from .models import Hirdetes

def kezdolap(request):
    return render(request, 'ingatlan/kezdolap.html')

def hirdetes_kereses(request):
    query = request.GET.get('q')
    if query:
        hirdetesek = Hirdetes.objects.filter(cim__icontains=query)
    else:
        hirdetesek = Hirdetes.objects.none()
    return render(request, 'ingatlan/hirdetes_kereses.html', {'hirdetesek': hirdetesek})

def hirdetes_kedveles(request, hirdetes_id):
    hirdetes = get_object_or_404(Hirdetes, id=hirdetes_id)
    # Implementáld a kedvelés logikáját itt
    return redirect('hirdetesek_lista')

def hirdetesek_lista(request):
    hirdetesek = Hirdetes.objects.all()
    return render(request, 'ingatlan/hirdetesek_lista.html', {'hirdetesek': hirdetesek})
