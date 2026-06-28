import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

import logoSrc from "@assets/file_00000000fac4720ea74d9f59620a35f6_1782623975956.png";
import infographic1Src from "@assets/IMG_20260628_001749_714_1782623926390.jpg";
import infographic2Src from "@assets/IMG_20260628_001714_311_1782623942087.jpg";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState<"user" | "dev">("user");
  const [duration, setDuration] = useState("30");
  const [amountInput, setAmountInput] = useState("1");

  // Update amount when role changes
  const handleRoleChange = (newRole: "user" | "dev") => {
    setRole(newRole);
    setAmountInput(newRole === "user" ? "1" : "10");
  };

  const amount = parseFloat(amountInput) || 0;
  const days = parseInt(duration) || 0;
  const projectedEarnings = amount * days;

  return (
    <div className="min-h-screen text-foreground overflow-hidden relative">
      <div className="stars"></div>
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full glass-card border-b-0 border-b-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="USG Logo" className="h-8 w-8 rounded-full" />
            <span className="font-orbitron font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
              UNITY STAKE GLOBAL
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors data-[active=true]:text-primary" data-testid="link-home">
              Inicio
            </Link>
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <Label htmlFor="wallet-sim" className="text-xs text-muted-foreground cursor-pointer">
                Simular Conexión
              </Label>
              <Switch 
                id="wallet-sim" 
                checked={isConnected} 
                onCheckedChange={setIsConnected}
                data-testid="toggle-wallet-sim"
              />
            </div>
          </nav>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1)_0%,transparent_50%)] -z-10"></div>
          
          <div className="relative mb-8 w-48 h-48 sm:w-64 sm:h-64 animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src={logoSrc} 
              alt="Unity Stake Global" 
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-glow">
            Unity Stake <span className="text-primary">Global</span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary font-medium tracking-wide mb-12">
            JUNTOS CONSTRUIMOS EL FUTURO
          </p>

          {/* Stats Bar */}
          <div className="glass-card rounded-2xl p-6 flex flex-wrap justify-center gap-8 md:gap-16 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">100+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Desarrolladores</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">100k+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Personas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-secondary">5%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Comisión Sistema</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">World</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Chain</span>
            </div>
          </div>
        </section>

        {/* Staking Section */}
        <section className="px-4 py-12 relative z-10">
          <div className="max-w-md mx-auto">
            <Card className="glass-card border-0 p-8 shadow-2xl relative overflow-hidden">
              {/* Background accents in card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col gap-8">
                {/* Token Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/50 p-1 border border-white/10 flex items-center justify-center shrink-0">
                    <img src={logoSrc} alt="USG" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-xl leading-none">Stake USG</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      World Chain <Badge variant="outline" className="text-[10px] h-4 bg-secondary/10 text-secondary border-secondary/20">LIVE</Badge>
                    </span>
                  </div>
                </div>

                {/* Role Selector */}
                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Seleccionar Rol</Label>
                  <RadioGroup value={role} onValueChange={handleRoleChange} className="grid grid-cols-2 gap-4">
                    <Label
                      htmlFor="role-user"
                      className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        role === "user" ? "border-primary bg-primary/10" : "border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <RadioGroupItem value="user" id="role-user" className="sr-only" />
                      <span className="font-bold">Usuario</span>
                      <span className="text-xs text-muted-foreground mt-1">Min $1/día</span>
                    </Label>
                    <Label
                      htmlFor="role-dev"
                      className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        role === "dev" ? "border-secondary bg-secondary/10" : "border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <RadioGroupItem value="dev" id="role-dev" className="sr-only" />
                      <span className="font-bold">Desarrollador</span>
                      <span className="text-xs text-muted-foreground mt-1">Min $10/día</span>
                    </Label>
                  </RadioGroup>
                </div>

                {/* Amount Input */}
                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Monto Diario (USD)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                    <Input 
                      type="number" 
                      value={amountInput}
                      onChange={(e) => setAmountInput(e.target.value)}
                      className="pl-8 bg-black/40 border-white/10 text-lg font-bold h-14"
                      min={role === "user" ? 1 : 10}
                      data-testid="input-amount"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-primary font-bold">USG eq.</span>
                  </div>
                </div>

                {/* Duration Selector */}
                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Duración</Label>
                  <RadioGroup value={duration} onValueChange={setDuration} className="flex gap-2">
                    {["30", "60", "90"].map((d) => (
                      <Label
                        key={d}
                        htmlFor={`dur-${d}`}
                        className={`flex-1 flex items-center justify-center rounded-lg border-2 py-3 cursor-pointer transition-all ${
                          duration === d ? "border-primary text-primary" : "border-white/10 text-muted-foreground hover:bg-white/5"
                        }`}
                      >
                        <RadioGroupItem value={d} id={`dur-${d}`} className="sr-only" />
                        <span className="font-bold">{d} Días</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Projected Earnings */}
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Aporte Total Proyectado</span>
                    <span className="text-xl font-bold font-orbitron">${projectedEarnings.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                    <div className="bg-gradient-to-r from-primary to-orange-500 h-full w-full animate-pulse-glow"></div>
                  </div>
                </div>

                {/* Commission Breakdown */}
                <div className="flex justify-between text-xs text-muted-foreground px-2 border-t border-white/5 pt-4">
                  <span>Comisión: 5%</span>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> 2.5% Fondo</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> 2.5% Devs</span>
                  </div>
                </div>

                {/* CTA Button */}
                {!isConnected ? (
                  <Button 
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-black glow-gold transition-all"
                    onClick={() => setIsConnected(true)}
                    data-testid="button-connect"
                  >
                    CONECTAR WALLET
                  </Button>
                ) : (
                  <Button 
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-secondary to-blue-600 hover:from-secondary/90 hover:to-blue-600/90 text-white glow-blue transition-all"
                    data-testid="button-stake"
                  >
                    HACER STAKE
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </section>

        {/* Infographics Section */}
        <section className="container mx-auto px-4 py-20 space-y-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">El Ecosistema</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={infographic1Src} 
                alt="Estructura de Comisión y Valores" 
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            
            <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={infographic2Src} 
                alt="Roadmap y Cálculos" 
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/50 py-12 relative z-10 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <img src={logoSrc} alt="USG" className="w-12 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="font-orbitron text-xl font-bold tracking-widest text-muted-foreground">LA UNIÓN ES NUESTRA FUERZA</p>
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Unity Stake Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
